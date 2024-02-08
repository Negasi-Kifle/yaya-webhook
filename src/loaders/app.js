const express = require("express");
const geh = require("../utils/global_error_handler");
const AppError = require("../utils/appError");
const app = express();

// Import router files

// Import third party middleware

// Use third party middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Mount routes with router files
app.use("/test", (req, res) => {
  res.send("Hello world");
});

// An unknown url
app.use("*", (req, res, next) => {
  return next(new AppError("Unknown URL", 404));
});

// Use the global error handler
app.use(geh);

// Export express app
module.exports = app;
