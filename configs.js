// Dotenv
require("dotenv").config();

/**
 * An object for holding environmental variables
 */
module.exports = {
  env: process.env.NODE_ENV,
  db: {
    remote: process.env.REMOTE_DB,
  },
  secret_key: process.env.SECRET_KEY,
  valid_ip_address: process.env.VALID_IP_ADDRESSES,
};
