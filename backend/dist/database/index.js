"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.knex = void 0;
const knexfile_js_1 = __importDefault(require("../knexfile.js"));
const knex = require("knex")(knexfile_js_1.default);
exports.knex = knex;
//# sourceMappingURL=index.js.map