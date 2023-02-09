"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateBody = void 0;
const joi_1 = __importDefault(require("joi"));
/**
 * Validate request body.
 *
 * @param {Object} schema
 * @return {Function}
 */
function validateBody(schema) {
    return function (req, res, next) {
        console.log("body", req.body);
        try {
            joi_1.default.assert(req.body, schema, { abortEarly: false });
            next();
        }
        catch (err) {
            next(err);
        }
    };
}
exports.validateBody = validateBody;
//# sourceMappingURL=validation.js.map