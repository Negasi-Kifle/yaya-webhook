const Joi = require("joi");

/**
 * Validate req.body of the API that verifies the webhook
 */
module.exports = Joi.object({
  id: Joi.string().required().messages({
    "any.required": "Id is required",
    "string.empty": "Id is required",
    "string.base": "Id must string",
  }),
  amount: Joi.number().required().min(1).messages({
    "any.required": "Please specify transaction amount",
    "number.min": "Transaction can not be less than 1 birr",
    "number.base": "Amount must be number",
  }),
  currency: Joi.string()
    .valid("ETB", "USD", "AED", "EURO")
    .required()
    .messages({
      "any.required": "Please specify currency of transaction",
      "any.only": "Currency must be one of: ETB, USD, AED, EURO",
    }),
  created_at_time: Joi.number().min(1).required().messages({
    "any.required": "Time at which the payment data is created is required",
    "number.min": "Created at must be greater than 1 milliseconds",
    "number.base": "Creted_at must be number",
  }),
  timestamp: Joi.number().min(1).required().messages({
    "any.required": "Timestamp (in millisecond) is required",
    "number.min": "Timestamp must be greater than 1 millisecond",
    "number.base": "Timestamp must be number",
  }),
  cause: Joi.string().required().messages({
    "any.required": "Please specify reason of transaction",
    "string.empty": "Please specify reason of transaction",
    "string.base": "Cause must be string",
  }),
  full_name: Joi.string().required().messages({
    "any.required": "Full name is required",
    "string.empty": "Full name is required",
    "string.base": "Full name must be string",
  }),
  account_name: Joi.string().required().messages({
    "any.required": "Account name is required",
    "string.empty": "Account name is required",
    "string.base": "Account name must be string",
  }),
  invoice_url: Joi.string().required().messages({
    "any.required": "Invoice URL is required",
    "string.empty": "Invoice URL is required",
    "string.base": "Invoice URL must be string",
  }),
});
