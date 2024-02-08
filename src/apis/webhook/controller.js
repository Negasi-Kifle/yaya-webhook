const configs = require("../../../configs");
const synchronizeTime = require("../../utils/synchronize_time");
const AppError = require("../../utils/appError");
const crypto = require("crypto");

// The webhook controller
exports.webHookController = async (req, res, next) => {
  try {
    // Incoming data
    const data = req.body;

    // Initiate CRON job

    // Send response
    res.status(200).json({
      status: "SUCCESS",
      message: "Webhook is verified successfully",
    });
  } catch (error) {
    next(error);
  }
};
