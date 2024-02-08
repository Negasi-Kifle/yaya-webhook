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
  port: process.env.PORT,
  jwt: {
    secret: process.env.JWT_SECRET,
    expires_in: process.env.JWT_EXPIRES_IN,
  },
};
