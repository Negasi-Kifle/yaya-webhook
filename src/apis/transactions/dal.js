const Transaction = require("./model");

/**
 * Data access layer for transaction related data
 */
module.exports = class TxnDAL {
  // Create transaction data
  static async createTxn(data) {
    try {
      // Create the txn document
      const txn = await Transaction.create(data);
      return txn;
    } catch (error) {
      throw error;
    }
  }
};
