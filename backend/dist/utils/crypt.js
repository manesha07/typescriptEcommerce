"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createToken = exports.compare = exports.hash = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
// import * as dotenv from 'dotenv';
// dotenv.config({path : '../.env'});
/**
 * Hash a string
 *
 * @param {string} password
 * @return {string}
 */
function hash(password) {
    return bcrypt_1.default.hashSync(password, parseInt(process.env.SALT));
}
exports.hash = hash;
/**
 * Compare the actual string with the hashed string.
 *
 * @param {string} password
 * @param {string} hash
 * @return {boolean}
 */
function compare(password, hash) {
    console.log("hiii");
    return bcrypt_1.default.compareSync(password, hash);
}
exports.compare = compare;
/**
 * Create a json web token.
 *
 * @param {Object} user
 * @return {string}
 */
function createToken(user) {
    return jsonwebtoken_1.default.sign(user, process.env.TOKEN_SECRET, {
        expiresIn: process.env.TOKEN_EXPIRATION,
    });
}
exports.createToken = createToken;
//# sourceMappingURL=crypt.js.map