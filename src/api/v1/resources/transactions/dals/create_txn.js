const Transaction = require("../model");

/**
 * Data access layer for create-transaction operation
 * @param {client:string, amount:number, currency: string, cause: string,
 * invoice_url: string, is_paid: string} data Object with these key-values pair
 * @returns Transaction document
 */
module.exports = async (data) => {
  try {
    // Create the txn document
    const txn = await Transaction.create(data);
    return txn;
  } catch (error) {
    throw error;
  }
};
