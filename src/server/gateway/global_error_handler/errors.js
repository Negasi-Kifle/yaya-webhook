// Utils
const { AppError } = require("../../../utils");

/**
 * Handle several types of errors
 * @param {Custom Error Object} err Custom Error that extends from Error
 * @return {Custom Error Object} Custom Error Object
 */
module.exports = (err) => {
  if (err.error && err.error.errno === -4039) {
    err = new AppError("Timeout. Try again", 400);
  }

  // Duplicate error - MongoDB
  if (err.message && err.message.includes("E11000")) {
    err = new AppError("Duplicate data exists", 400);
  }

  // Validation errir
  if (err.name === "ValidationError") {
    err = new AppError("DB validation error", 400);
  }

  // Cast Error
  if (err.message.includes("Cast to ObjectId")) {
    err = new AppError("Invalid parameter passed", 400);
  }

  // Token Error
  if (err.name === "JsonWebTokenError") {
    err = new AppError("Please login", 401);
  }

  // Token Expired
  if (err.name === "TokenExpiredError") {
    err = new AppError("Session expired, please login", 401);
  }

  return err;
};
