import Joi from 'joi';

/**
 * Validate request body.
 *
 * @param {Object} schema
 * @return {Function}
 */
export function validateBody(schema) {
  return function (req, res, next) {
    console.log("body",req.body);
    try {
      Joi.assert(req.body, schema, { abortEarly: false });

      next();
    } catch (err) {
      next(err);
    }
  };
}