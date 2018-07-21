import { Db, MongoClient } from 'mongodb';

let client: MongoClient;

/**
 * Connects to the database client and returns the database
 * Or returns directly the database if already connected
 * @returns {Promise<Db>}
 */
export async function getDatabase(): Promise<Db> {
  if (!client) {
    client = await MongoClient.connect(process.env.MONGO_URI, {useNewUrlParser: true});
  }
  return client.db(process.env.MONGO_DATABASE);
}

/**
 * Closes the connection with the database client
 *
 * @returns {Promise<void>}
 */
export function closeConnection(): Promise<void> {
  return client && client.close();
}
