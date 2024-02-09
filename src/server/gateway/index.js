// Express
const express = require("express");
const app = express();

// Secure APIs
const compression = require("compression");
app.use(compression());

// Cors
const cors = require("cors");
app.use(cors({ origin: "*", credentials: false }));

// Helmet
const helmet = require("helmet");
app.use(helmet());

// Mongodb sanitize
const mongodbSanitize = require("mongodb-sanitize");
app.use(mongodbSanitize());

// Create a body on the request object
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Utils
const { AppError } = require("../../utils");

// Config
const configs = require("../../config");

// Check API Key

const { checkAPIKey } = require("../../api/v1/middleware");
app.use("*", checkAPIKey);

// Handle routes for API V1
const { v1 } = require("./routes");
v1(app);

// Handle 404 or unknown url
app.use("*", (req, res, next) => {
  return next(new AppError("Unknown URL", 404));
});

// Global Error Handler
const globalErrorHandler = require("./global_error_handler");
app.use(globalErrorHandler);

// Export global app
module.exports = app;
