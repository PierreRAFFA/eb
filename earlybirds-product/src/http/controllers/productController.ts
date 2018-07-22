import { Request, Response } from "express";
import logger from "../../logger";
import { Db } from "mongodb";
import { assign, map, filter, orderBy } from "lodash";
import { getDatabase } from "../../external/db";
import { Product } from "../../interfaces";
import { getColorDeltaE } from "../../utils/productUtil";

const MAX_DELTA: number = 20;

/**
 * Searches the products whose color is close to the color of the specified product
 *
 * @param {e.Request} req
 * @param {e.Response} res
 * @returns {Promise<void>}
 */
export let getSuggestionsByColor = async (req: Request, res: Response) => {
  const {id} = req.params;
  console.time('==========> Products returned by Express in');

  let suggestedProducts: Array<Product> = [];

  try {
    const db: Db = await getDatabase();

    //get the product from id
    const product: Product = await db.collection('product').findOne<Product>({id});

    //check whether the product exists
    if (product) {

      //check whether the product gets some color
      if (product.lab) {

        // get the products by filtering the specified product and the products with no color
        // we could filter by gender_id here as well
        // An optimisation is possible here by filtering by a range of l, a, b
        suggestedProducts = await db.collection('product').find<Product>(
          {
            id: {$ne: id},
            lab: {$exists: true, $ne: null},
          }
        ).toArray();

        //filter by color proximity
        suggestedProducts = map<Array<Product>, Product>(suggestedProducts, (suggestedProduct: Product) => {
          const deltaE: number = getColorDeltaE(suggestedProduct, product);
          return assign({}, suggestedProduct, {deltaE});
        });

        //filter by deltaE
        suggestedProducts = filter<Product>(suggestedProducts, (suggestedProduct: Product) => suggestedProduct.deltaE < MAX_DELTA);

        //order by deltaE
        suggestedProducts = orderBy<Product>(suggestedProducts, ['deltaE']);
      }

      //Send response
      res.json(suggestedProducts);

      console.timeEnd('==========> Products returned by Express in');
    } else {
      res.status(404).json({
        message: 'Product not found'
      });
    }
  } catch (e) {
    logger.error(e);
    const statusCode: number = e.statusCode || 500;
    res.status(statusCode).json({
      message: e.message,
      stack: e.stack
    });
  }
};
