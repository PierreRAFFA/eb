import * as util from 'util';
import { Color, Product } from "../src/interfaces/index";
import { get, take } from "lodash";
import {
  Collection,
  Db,
  UpdateWriteOpResult
} from "mongodb";
import chalk from "chalk";
import vision from '@google-cloud/vision';
import logger from "../src/logger";
import { rgb } from 'color-convert';
import { LAB } from "color-convert/conversions";
import { getDatabase } from "../src/external/db";
import * as cliProgress from 'cli-progress';

//parse .env
require('dotenv').config();

/**
 * Entrypoint
 */
export async function execute(argv: any = undefined) {

  try {
    //connect to database
    const db: Db = await getDatabase();

    //get the product collection
    const ProductCollection: Collection<Product> = db.collection('product');

    //get all products
    let products: Array<Product> = await ProductCollection.find<Product>().toArray();

    //@HARDCODE
    products = take(products, 10);

    logger.info(chalk.bgGreen(`You are getting the dominant color of ${products.length} products`));

    //loop on product to get the dominant color
    let numProductsModified: number = 0;
    for (let iP = 0; iP < products.length; iP++) {
      const product: Product = products[iP];
      const color: Color = await getDominantColor(product.photo);
      logger.silly('rgb:', color);

      const success: boolean = await updateProductColor(ProductCollection, product, color);

      if (!success) {
        logger.info(chalk.bgRed(`\nError when trying to set color to the product ${product.id}`));
      } else {
        numProductsModified++;
      }
    }
    logger.info(chalk.bgGreen(`Results: ${numProductsModified} out of ${products.length} products color updated `));
  } catch (e) {
    logger.error(chalk.bgRed(e.message));
    logger.error(chalk.bgRed(e.stack));
  }
}

/**
 * Returns the dominant color of a photo by calling Google Vision
 *
 * @param {string} photoURL
 * @returns {Promise<Color>}
 */
async function getDominantColor(photoURL: string): Promise<Color> {

  const client = new vision.ImageAnnotatorClient();

  try {
    const imageProperties = await client.imageProperties(`https:${photoURL}`);
    logger.silly(util.inspect(imageProperties, {depth: undefined}));
    return get(imageProperties, '[0].imagePropertiesAnnotation.dominantColors.colors[0].color') as Color;

  } catch (e) {
    logger.error(e.message, e.stack);
    logger.error(e.stack);
  }
}

/**
 * Updates the product color by setting RGB and Lab
 *
 * @param {Collection<Product>} ProductCollection
 * @param {Product} product
 * @param {Color} colorProperties
 * @returns {Promise<boolean>}
 */
async function updateProductColor(ProductCollection: Collection<Product>, product: Product, color: Color): Promise<boolean> {

  if (color) {
    const lab: LAB = rgb.lab([color.red, color.green, color.blue]);

    logger.silly('lab: ', lab);
    const update: any = {
      rgb: {
        r: color.red,
        g: color.green,
        b: color.blue,
      },
      lab: {
        l: lab[0],
        a: lab[1],
        b: lab[2],
      }
    };

    const result: UpdateWriteOpResult = await ProductCollection.updateOne({id: product.id}, {$set: update});
    return result.result.ok === 1;
  } else {
    return false;
  }
}
