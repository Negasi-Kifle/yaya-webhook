// Version 1 API routes
const { transactions, webhook } = require("../../../api/v1/resources");

module.exports = (app) => {
  //   app.use("/api/v1/transaction", transactions);
  app.use("/api/v1/webhook", webhook);
};
