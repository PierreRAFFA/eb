import { Product } from "../interfaces";
import { get } from 'lodash';

/**
 * Returns the delta-E of the 2 specified products
 *
 * @param {Product} product1
 * @param {Product} product2
 * @returns {any}
 */
export function getColorDeltaE(product1: Product, product2: Product) {

  const valid: boolean = !!get(product1, 'lab') && !!get(product2, 'lab');
  if (valid) {
    return Math.sqrt(
      Math.pow(product1.lab.l - product2.lab.l, 2)
      + Math.pow(product1.lab.a - product2.lab.a, 2)
      + Math.pow(product1.lab.b - product2.lab.b, 2)
    );
  }
  return undefined;
}
