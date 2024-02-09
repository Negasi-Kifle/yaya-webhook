const { model } = require("mongoose");
const txnSchema = require("./schema");

// Transaction model
const Transaction = model("Transaction", txnSchema);

// Export the model
module.exports = Transaction;
