"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const schema = joi_1.default.object({
    name: joi_1.default.string().max(50).required(),
    username: joi_1.default.string().max(50).required(),
    password: joi_1.default.string().max(20).required(),
    email: joi_1.default.string().email().max(50).required(),
});
exports.default = schema;
//# sourceMappingURL=addAdmin.js.map