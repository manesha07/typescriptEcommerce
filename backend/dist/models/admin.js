"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DBModel_1 = __importDefault(require("./DBModel"));
/**
 * Model for the 'users' table.
 *
 * @class User
 */
class Admin extends DBModel_1.default {
    constructor() {
        super('admin');
    }
}
exports.default = Admin;
//# sourceMappingURL=admin.js.map