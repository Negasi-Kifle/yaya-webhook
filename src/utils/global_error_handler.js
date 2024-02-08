// AppError
const AppError = require("./appError");

// Configs
const configs = require("../../configs");

// Error message for development
const errMessageForDevelopment = (err, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
    error: err,
    erroStack: err.stack,
  });
};

// Error messafe for production
const errMessageForProduction = (err, res) => {
  if (err.isOprational) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  } else {
    res.status(500).json({
      status: "ERROR",
      message: "Opps! Unknown error happened. Please try again",
    });
  }
};

/**
 * The error handler middleware
 */
const geh = (err, req, res, next) => {
  err.status = err.status || "ERROR";
  err.statusCode = err.statusCode || 500;

  // Duplicate data error
  if (err.code === 11000) {
    if (
      err.message.includes("phoneNumber") ||
      err.message.includes("phone_number")
    ) {
      err = new AppError("Phone number is already used.", 400);
    } else if (err.message.includes("email")) {
      err = new AppError("Email is already used", 400);
    } else if (err.message.includes("name")) {
      err = new AppError("Duplicate name found", 400);
    }
  }

  // Mongoose validation error
  if (err.name === "ValidationError") {
    const message = Object.values(err.errors)
      .map((val) => val.message)
      .join(" || ");
    err = new AppError(message, 400);
  }

  // Casting error
  if (err.name === "CastError") {
    err = new AppError("Resource not found", 404);
  }

  // JWT token error
  if (err.name === "JsonWebTokenError" || err.name === "TokenExpiredError") {
    err = new AppError("Please login", 401);
  }

  // Send different error for different environments
  if (configs.env === "development") {
    errMessageForDevelopment(err, res);
  } else if (configs.env == "production" || configs.env === "qa") {
    errMessageForProduction(err, res);
  }
};

// Export geh
module.exports = geh;
