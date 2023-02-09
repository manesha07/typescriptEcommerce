"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const schema = joi_1.default.object({
    name: joi_1.default.string().max(100).required(),
    description: joi_1.default.string().max(200).required(),
    price: joi_1.default.number().required(),
    stock: joi_1.default.number().required(),
    category: joi_1.default.string().max(200).required(),
    images: joi_1.default.string().max(200).required(),
});
exports.default = schema;
//# sourceMappingURL=addProduct.js.map