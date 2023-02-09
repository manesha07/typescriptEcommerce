import DBModel from './DBModel';

/**
 * Model for the 'users' table.
 *
 * @class User
 */
class Admin extends DBModel {
  constructor() {
    super('admin');
  }
}

export default Admin;
