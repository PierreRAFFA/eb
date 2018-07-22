import { Request, Response } from "express";
import logger from "../../logger";
import { Db } from "mongodb";
import { assign, map, filter, orderBy} from "lodash";
import { getDatabase } from "../../external/db";
import { Product } from "../../interfaces";

const MAX_DELTA: number = 20;

/**
 * Searches the products whose color is close to the color of the specified product
 *
 * @param {e.Request} req
 * @param {e.Response} res
 * @returns {Promise<void>}
 */
export let search = async (req: Request, res: Response) => {
  const { id } = req.params;
  console.time('==========> Products returned by Express in');
  try {
    const db: Db = await getDatabase();

    //get the product
    const product: Product = await db.collection('product').findOne<Product>({id});

    // get the product color by filtering the specified product and the product with no color
    let suggestedProducts: Array<Product> = await db.collection('product').find<Product>(
      {
        id: {$ne: id},
        lab : { $exists: true, $ne: null },
      }).toArray();

    //filter by color proximity
    suggestedProducts = map<Array<Product>, Product>(suggestedProducts, (suggestedProduct: Product) => {
      const deltaE: number = Math.sqrt(
        Math.pow(suggestedProduct.lab.l - product.lab.l, 2)
        + Math.pow(suggestedProduct.lab.a - product.lab.a, 2)
        + Math.pow(suggestedProduct.lab.b - product.lab.b, 2)
      );
      logger.info(deltaE.toString());
      return assign({}, suggestedProduct, {deltaE});
    });

    //filter by deltaE
    suggestedProducts = filter<Product>(suggestedProducts, (suggestedProduct: Product) => suggestedProduct.deltaE < MAX_DELTA);

    //order by deltaE
    suggestedProducts = orderBy<Product>(suggestedProducts, ['deltaE']);

    res.json({
      product,
      suggestedProducts
    });

    console.timeEnd('==========> Products returned by Express in');
  } catch (e) {
    logger.error(e);
    const statusCode: number = e.statusCode || 500;
    const errJSON: any = 'response' in e ? JSON.parse(e.response) : e;
    res.status(statusCode).json({
      message: e.message,
      stack: e.stack
    });
  }
};
