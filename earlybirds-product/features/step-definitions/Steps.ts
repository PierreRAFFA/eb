//disable logs
process.env.LOG_LEVEL = '5';

import { expect } from 'chai';
import { Given, When, Then, AfterAll, BeforeAll, setDefaultTimeout, setWorldConstructor } from 'cucumber';
import { closeConnection, getDatabase } from "../../src/external/db";
import MongodbMemoryServer from 'mongodb-memory-server';
import { World } from "../support/World";
import { ProductObjectModel } from "../support/ProductObjectModel";

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

Then('the product collection should contain {int} products', async function (numProducts: number) {
  const count: number = await pageObjectModel.getProductsCount();
  expect(count).equals(numProducts);
});
