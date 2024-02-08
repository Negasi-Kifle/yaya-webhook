const configs = require("../../../configs");
const synchronizeTime = require("../../utils/synchronize_time");
const AppError = require("../../utils/appError");
const TxnDAL = require("../transactions/dal");

// The webhook controller
exports.webHookController = async (req, res, next) => {
  try {
    // Incoming data
    const data = req.body;

    // Send response
    res.status(200).json({
      status: "SUCCESS",
      message: "Webhook is verified successfully",
    });

    // Persist transaction data
    await TxnDAL.createTxn({
      client: data.account_name,
      amount: data.amount,
      currency: data.currency,
      cause: data.cause,
      invoice_url: data.invoice_url,
    });
  } catch (error) {
    next(error);
  }
};
