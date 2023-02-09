import DBModel from './DBModel';

/**
 * Model for the 'users' table.
 *
 * @class User
 */
class User extends DBModel {
  constructor() {
    super('user');
  }
}

export default User;
