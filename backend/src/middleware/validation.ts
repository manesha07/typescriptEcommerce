import Joi from "joi";
import { Request, Response, NextFunction } from "express";

/**
 * Validate request body.
 *
 * @param {Object} schema
 * @return {Function}
 */
export function validateBody(schema: any) {
  return function (req: Request, res: Response, next: NextFunction) {
    console.log("body", req.body);
    try {
      Joi.assert(req.body, schema, { abortEarly: false });

      next();
    } catch (err) {
      next(err);
    }
  };
}
