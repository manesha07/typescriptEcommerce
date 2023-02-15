import HttpStatusCodes from "http-status-codes";
import { Request, Response, NextFunction } from "express";
import Joi from "joi";
/**
 * Generic error handling middleware.
 *
 * @param {Object} err
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export default function (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  const error = buildError(err);

  res.status(error.code).json(error);
}

function buildError(err: any) {
  // Check if the error is Joi and handle accordingly
  if (Joi.isError(err)) {
    return {
      code: HttpStatusCodes.BAD_REQUEST,
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
      code: HttpStatusCodes.UNAUTHORIZED,
      message: HttpStatusCodes.getStatusText(HttpStatusCodes.UNAUTHORIZED),
      details: err.message,
    };
  }

  // Any other error types will be treated as an internal server error
  return {
    code: HttpStatusCodes.INTERNAL_SERVER_ERROR,
    message: HttpStatusCodes.getStatusText(
      HttpStatusCodes.INTERNAL_SERVER_ERROR
    ),
    details: err.message || "",
  };
}
