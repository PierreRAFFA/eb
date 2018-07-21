import { Product } from "../src/interfaces/index";
import { map, zipObject, forEach, filter } from "lodash";
import { getDatabase } from "../src/external/db";
import { BulkWriteResult, Collection, Db, OrderedBulkOperation } from "mongodb";
import chalk from "chalk";
import logger from "../src/logger";
import * as download from "download";

//parse .env
require('dotenv').config();

/**
 * Entrypoint
 */
export async function execute(argv: any) {
  try {
    const url: string = argv.url;

    if (url) {
      const buffer: Buffer = await download(url);
      const csv: string = buffer.toString('utf8');

      const products: Array<Product> = getProductFromCSV(csv);

      //connect to database
      const db: Db = await getDatabase();
      const ProductCollection: Collection<Product> = db.collection('product');

      //bulk/upsert the products
      const results: BulkWriteResult = await bulkInsertProducts(ProductCollection, products);
      logger.info(chalk.bgGreen(`Results: You have just inserted ${results.nUpserted} new products`));
      logger.info(chalk.bgGreen(`         You have just modified ${results.nModified} products`));
    }else{
      logger.error(chalk.bgRed('You should specify an url (npm run products:import http://...)'));
    }

  } catch (e) {
    console.log(chalk.bgRed(e.message));
  }

};

/**
 *
 * @param {string} filepath
 * @returns {Array<Product>}
 */
function getProductFromCSV(csv: string): Array<Product> {

  //get rows and ignore empty lines
  let rows = csv.split("\r\n");
  rows = filter(rows, row => row != '');

  //get headers
  const headers: Array<string> = rows.shift().split(";");

  //build the product data
  const products: Array<Product> = map(rows, row => {
    const values: Array<string> = row.split(";");
    const product: any = zipObject<string>(headers, values);
    return product;
  });

  return products;
}

/**
 *
 * @param {Collection<Product>} ProductCollection
 * @param {Array<Product>} products
 * @returns {Promise<BulkWriteResult>}
 */
async function bulkInsertProducts(ProductCollection: Collection<Product>, products: Array<Product>): Promise<BulkWriteResult> {
  const bulk: OrderedBulkOperation = ProductCollection.initializeOrderedBulkOp();

  forEach(products, product => {
    bulk.find( { id: product.id } ).upsert().replaceOne(product);
  });

  return await bulk.execute();
}
