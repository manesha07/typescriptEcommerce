import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
// import * as dotenv from 'dotenv';
// dotenv.config({path : '../.env'});

/**
 * Hash a string
 *
 * @param {string} password
 * @return {string}
 */
export function hash(password: string) :string{
  return bcrypt.hashSync(password, parseInt(process.env.SALT as string));
}

/**
 * Compare the actual string with the hashed string.
 *
 * @param {string} password
 * @param {string} hash
 * @return {boolean}
 */
export function compare(password: string, hash: string) :boolean {
  console.log("hiii");
  return bcrypt.compareSync(password, hash);
}

/**
 * Create a json web token.
 *
 * @param {Object} user
 * @return {string}
 */
export function createToken(user: object) : string{
  return jwt.sign(user, process.env.TOKEN_SECRET as string, {
    expiresIn: process.env.TOKEN_EXPIRATION,
  });
}
