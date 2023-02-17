"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DBModel_1 = __importDefault(require("./DBModel"));
/**
 * Model for the 'manufacturers' table.
 *
 * @class Manufacturer
 */
class Product extends DBModel_1.default {
    constructor() {
        super("product");
    }
}
exports.default = Product;
//# sourceMappingURL=product.js.map