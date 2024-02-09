// Joi
const Joi = require("joi");

// App Error
const { AppError } = require("../../../../utils");

/**
 * Validate the request body
 * @param {Joi Schema} schema Joi Schema defintion
 * @returns {fn(req,res,next)}
 */

module.exports = (schema) => {
  return (req, res, next) => {
    // Validate the request body
    const { value, error } = schema.validate(req.body);

    // Handle the error
    if (error) return next(new AppError(error.message, 400));

    // Attach the value on the request object
    req.value = value;

    next();
  };
};
