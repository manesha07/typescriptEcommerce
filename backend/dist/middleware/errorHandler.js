"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const joi_1 = __importDefault(require("joi"));
/**
 * Generic error handling middleware.
 *
 * @param {Object} err
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
function default_1(err, req, res, next) {
    const error = buildError(err);
    res.status(error.code).json(error);
}
exports.default = default_1;
function buildError(err) {
    // Check if the error is Joi and handle accordingly
    if (joi_1.default.isError(err)) {
        return {
            code: http_status_codes_1.default.BAD_REQUEST,
            message: "Validation Error",
            details: err.details.map((e) => e.message),
        };
    }
    if (err.isBoom) {
        return {
            code: err.output.statusCode,
            message: err.output.payload.error,
            details: err.output.payload.message,
        };
    }
    if (err.name === "UnauthorizedError") {
        return {
            code: http_status_codes_1.default.UNAUTHORIZED,
            message: http_status_codes_1.default.getStatusText(http_status_codes_1.default.UNAUTHORIZED),
            details: err.message,
        };
    }
    // Any other error types will be treated as an internal server error
    return {
        code: http_status_codes_1.default.INTERNAL_SERVER_ERROR,
        message: http_status_codes_1.default.getStatusText(http_status_codes_1.default.INTERNAL_SERVER_ERROR),
        details: err.message || "",
    };
}
//# sourceMappingURL=errorHandler.js.map