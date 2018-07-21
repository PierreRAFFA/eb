//disable logs
import { Product } from "../../src/interfaces";

process.env.LOG_LEVEL = '3';

import { expect } from 'chai';
import * as sinon from 'sinon';
import { Given, When, Then, AfterAll, BeforeAll, setDefaultTimeout, setWorldConstructor } from 'cucumber';
import vision from '@google-cloud/vision';
import MongodbMemoryServer from 'mongodb-memory-server';
import { filter } from 'lodash';
import { closeConnection, getDatabase } from "../../src/external/db";
import { generateGoogleVisionResponse } from "../fixtures/products.fixture";
import { World } from "../support/World";
import { ProductObjectModel } from "../support/ProductObjectModel";
import { Cursor } from "mongodb";

//create mongo server in-memory
const mongod: any = new MongodbMemoryServer();

const pageObjectModel: ProductObjectModel = new ProductObjectModel();

/**
 * Cucumber Configuration
 */
// let enough time to download mongod in-memory (download needed just once)
setDefaultTimeout(200000);

setWorldConstructor(World);

/**
 * BeforeAll Hook
 * Set up Mongo in-memory, gets its information and set the en variables
 */
BeforeAll(async () => {
  const uri = await mongod.getConnectionString();
  const port = await mongod.getPort();
  const dbPath = await mongod.getDbPath();
  const dbName = await mongod.getDbName();

  //revert back as the default value
  setDefaultTimeout(5000);

  //set the database information from MongodbMemoryServer
  process.env.MONGO_URI = uri;
  process.env.MONGO_DATABASE = dbName;

  //connect to the database
  await getDatabase();
});

/**
 * After All Hook
 * Close the connection and stop mongod
 */
AfterAll(async() => {
  await closeConnection();
  mongod.stop();
});

/**
 * Steps
 */
Given('I have already imported {int} products', function (numProducts: number) {
  return pageObjectModel.importProducts(numProducts);
});

Given('I have {int} products already inserted', function (numProducts: number) {
  return pageObjectModel.createProducts(numProducts);
});

When('I execute the command to import a csv containing {int} rows', function(numProducts: number) {
  return pageObjectModel.importProducts(numProducts);
});

When('I execute the command to get the dominant color for each product', function () {
  const moackedResponse: any = generateGoogleVisionResponse(10, 20, 30);
  sinon.stub(vision.ImageAnnotatorClient.prototype, 'imageProperties').resolves(moackedResponse);
  return pageObjectModel.setProductsColor();
});

Then('the product collection should contain {int} products', async function (numProducts: number) {
  const count: number = await pageObjectModel.getProductsCount();
  expect(count).equals(numProducts);
});

Then('it should populate the color for {int} products', async function (numProducts: number) {
  const products: Array<Product> = await pageObjectModel.getAllProducts();

  const numProductsWithColor: number = filter(products, (product: Product) => product.rgb && product.lab).length;

  expect(numProductsWithColor).equals(numProducts);
});
