"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const schema = joi_1.default.object({
    name: joi_1.default.string().max(50).allow(null, ''),
    username: joi_1.default.string().max(50).allow(null, ''),
    password: joi_1.default.string().min(8).max(20).allow(null, ''),
    email: joi_1.default.string().email().max(50).allow(null, ''),
});
exports.default = schema;
//# sourceMappingURL=editUser.js.map