import DBModel from './DBModel.js';

/**
 * Model for the 'users' table.
 *
 * @class User
 */
class Checkout extends DBModel {
  constructor() {
    super('checkout');
  }
}

export default Checkout;
