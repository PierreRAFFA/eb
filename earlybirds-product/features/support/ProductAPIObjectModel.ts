/**
 * This ObjectModel manages everything related to the API
 */
import * as request from "request-promise";

export class ProductAPIObjectModel {

  /**
   * Current Response
   */
  public response: any;

  /**
   * Calls API endpoint
   *
   * @param {string} method
   * @param {string} uri
   * @returns {Promise<void>}
   */
  public async call(method: string, uri: string): Promise<any> {
    try {
      this.response = await request({
        method,
        uri,
        resolveWithFullResponse: true // to get the response headers with status code
      })
    } catch (errorResponse) {
      this.response = errorResponse;
    }
  }

  /**
   * Returns the response formatted as JSON
   * @returns {any}
   */
  public getResponseAsJSON(): any {
    return JSON.parse(this.response.body);
  }

}
