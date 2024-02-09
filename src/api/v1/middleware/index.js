// Export all middlewares in one object
module.exports = {
  validator: require("./validator"),
  checkIPAddress: require("./check_ip_address"),
  verifySignature: require("./verify_signature"),
  checkAPIKey: require("./check_api_key"),
};
