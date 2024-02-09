// App
const app = require("../index");

// Send Dev Error
const sendDevError = require("./send_dev_error");

// Send Prod Error
const sendProdError = require("./send_prod_error");

// Errors
const errors = require("./errors");

// Config
const config = require("../../../config");

module.exports = (err, req, res, next) => {
  // Get the error object
  err.status = err.status || "ERROR";
  err.statusCode = err.statusCode || 500;

  err = errors(err);

  // Handle error for different env
  if (config.env === "local" || config.env === "development") {
    sendDevError(err, res);
  } else if (config.env === "qa" || config.env === "production") {
    sendProdError(err, res);
  }

  next();
};
