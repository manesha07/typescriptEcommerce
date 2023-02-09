import DBModel from './DBModel';

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
