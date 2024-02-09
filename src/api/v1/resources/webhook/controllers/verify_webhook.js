const Transaction = require("../../transactions/dals");

// The webhook controller
module.exports = async (req, res, next) => {
  try {
    // Incoming data
    const data = req.value;

    // Send response
    res.status(200).json({
      status: "SUCCESS",
      message: "Webhook is verified successfully",
    });

    // Persist transaction data
    await Transaction.createTxn({
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
