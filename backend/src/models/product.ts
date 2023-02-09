import DBModel from './DBModel';

/**
 * Model for the 'manufacturers' table.
 *
 * @class Manufacturer
 */
class Product extends DBModel {
  constructor() {
    super('product');
  }
}

export default Product;