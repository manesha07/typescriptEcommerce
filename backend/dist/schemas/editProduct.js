"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const schema = joi_1.default.object({
    name: joi_1.default.string().max(100).allow(null, ''),
    description: joi_1.default.string().max(200).allow(null, ''),
    price: joi_1.default.number().allow(null, ''),
    stock: joi_1.default.number().allow(null, ''),
    category: joi_1.default.string().max(200).allow(null, ''),
    images: joi_1.default.string().max(200).allow(null, ''),
});
exports.default = schema;
//# sourceMappingURL=editProduct.js.map