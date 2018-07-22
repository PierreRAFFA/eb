//disable logs
import { Product } from "../../src/interfaces";

process.env.LOG_LEVEL = '1';

import { expect } from 'chai';
import * as sinon from 'sinon';
import { Given, When, Then, AfterAll, BeforeAll, setDefaultTimeout, setWorldConstructor, After } from 'cucumber';
import vision from '@google-cloud/vision';
import MongodbMemoryServer from 'mongodb-memory-server';
import { filter } from 'lodash';
import { closeConnection, getDatabase } from "../../src/external/db";
import { generateGoogleVisionResponse } from "../fixtures/products.fixture";
import { World } from "../support/World";
import { ProductObjectModel } from "../support/ProductObjectModel";
import { ProductAPIObjectModel } from "../support/ProductAPIObjectModel";
import { Db } from "mongodb";

//create mongo server in-memory
const mongod: any = new MongodbMemoryServer();

const productObjectModel: ProductObjectModel = new ProductObjectModel();
const productAPIObjectModel: ProductAPIObjectModel = new ProductAPIObjectModel();

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

  //set the env variable for the test (database information from MongodbMemoryServer and http port)
  process.env.HTTP_PORT = '3111';
  process.env.MONGO_URI = uri;
  process.env.MONGO_DATABASE = dbName;

  //connect to the database
  await getDatabase();

  //launch server for API testing
  await import('../../src/server');
});

/**
 * After hook
 * We have to purge the product collection
 */
After(async () => {
  const db: Db = await getDatabase();
  db.collection('product').drop();
});

/**
 * After All Hook
 * Close the connection and stop mongod
 */
AfterAll(async() => {
  await closeConnection();
  mongod.stop();

  //easy way to stop express
  setTimeout(process.exit, 1000);
});

/**
 * Steps
 */
Given('I have already imported {int} products', function (numProducts: number) {
  return productObjectModel.importProducts(numProducts);
});

Given('I have {int} products already inserted', function (numProducts: number) {
  return productObjectModel.createProducts(numProducts);
});
Given('a product is already inserted with id: {string} and lab: {int} {int} {int}',  async function (id: string, l: number, a: number, b: number) {
  await productObjectModel.createProduct(id, l, a, b);
});

Given('a product is already inserted with id: {string}', async function (id: string) {
  await productObjectModel.createProduct(id);
});




When('I execute the command to import a csv containing {int} rows', function(numProducts: number) {
  return productObjectModel.importProducts(numProducts);
});

When('I execute the command to get the dominant color for each product', function () {
  const moackedResponse: any = generateGoogleVisionResponse(10, 20, 30);
  sinon.stub(vision.ImageAnnotatorClient.prototype, 'imageProperties').resolves(moackedResponse);
  return productObjectModel.setProductsColor();
});

When(/I call (\w+) \/products\/(\w+)\/suggestions-color/, async function (method: string, id: number) {
  const uri: string = `http://localhost:${process.env.HTTP_PORT}/products/${id}/suggestions-color`;
  return productAPIObjectModel.call(method, uri);
});





Then('the product collection should contain {int} products', async function (numProducts: number) {
  const count: number = await productObjectModel.getProductsCount();
  expect(count).equals(numProducts);
});

Then('it should populate the color for {int} products', async function (numProducts: number) {
  const products: Array<Product> = await productObjectModel.getAllProducts();

  const numProductsWithColor: number = filter(products, (product: Product) => product.rgb && product.lab).length;

  expect(numProductsWithColor).equals(numProducts);
});

Then('it should return the status code {int}', function (statusCode: number) {
  expect(productAPIObjectModel.response.statusCode).equals(statusCode);
});

Then('it should return {int} products', function (numProducts: number) {
  expect(productAPIObjectModel.getResponseAsJSON().length).equals(numProducts);
});

