const configs = require("../../../../config");
const { AppError } = require("../../../../utils");

// Middleware to check API key
module.exports = (req, res, next) => {
  // API Key
  const apiKey = req.headers["x-api-key"];

  // Check if there is an API Key
  if (!apiKey) return next(new AppError("Please provide a valid API Key", 404));

  // Check if the API Key is valid
  if (apiKey !== configs.api_key)
    return next(new AppError("Please provide a valid API Key", 400));

  next();
};
