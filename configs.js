// Dotenv
require("dotenv").config();

/**
 * An object for holding environmental variables
 */
module.exports = {
  env: process.env.NODE_ENV,
  db: {
    local: process.env.LOCAL_DB,
  },
  secret_key: process.env.SECRET_KEY,
  valid_ip_address: process.env.VALID_IP_ADDRESSES,
};
