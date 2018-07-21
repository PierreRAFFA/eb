import * as importProducts from "../../commands/importProducts";
import * as setProductsColor from "../../commands/setProductsColor";
import { getDatabase } from "../../src/external/db";
import { Cursor, Db, InsertWriteOpResult } from "mongodb";
import * as fixture from "../fixtures/products.fixture";
import { Product } from "../../src/interfaces";
import nock = require("nock");
import { generateCSVDownloadResponse } from "../fixtures/products.fixture";

/**
 * This ObjectModel manages everything related to the products
 */
export class ProductObjectModel {

  /**
   * Imports the products from CSV by calling the command
   *
   * @returns {Promise<void>}
   */
  public importProducts(numProducts: number) {

    nock('http://domain.com')
      .get('/products.csv')
      .reply(200, generateCSVDownloadResponse(numProducts));

    return importProducts.execute({
      url: 'http://domain.com/products.csv'
    });
  }

  /**
   * Sets dominant color of the products by calling the command
   *
   * @returns {Promise<void>}
   */
  public setProductsColor() {
    return setProductsColor.execute();
  }

  /**
   * Returns the number of products inserted
   *
   * @returns {Promise<number>}
   */
  public async getProductsCount() {
    const db: Db = await getDatabase();
    return await db.collection('product').countDocuments();
  }

  /**
   * Creates a certain amount of products
   *
   * @param {number} numProducts
   * @returns {Promise<void>}
   */
  public async createProducts(numProducts: number): Promise<number> {
    const productDatas: Array<Product> = [];
    for (let i = 0; i < numProducts; i++) {
      productDatas.push(fixture.generateProductData(i.toString(), `TShirt ${i}`));
    }

    const db: Db = await getDatabase();
    const results: InsertWriteOpResult = await db.collection('product').insertMany(productDatas);

    return results.insertedCount;
  }

  /**
   * Returns all products
   *
   * @returns {Promise<Cursor<Product>>}
   */
  public async getAllProducts(): Promise<Array<Product>> {
    const db: Db = await getDatabase();
    return await db.collection('product').find<Product>().toArray();
  }
}
