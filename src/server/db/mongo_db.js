// Mongoose
const mongoose = require("mongoose");

// Config
const config = require("../../config");

/**
 * Initiate DB Connection
 * @param
 * @return {mongdb_connection} A mongodb connection for further usage
 */
module.exports = () => {
  // Connect DB
  mongoose
    .connect(config.db.local)
    .then(() => {
      console.log("MongoDB successfully connected");
    })
    .catch((err) => {
      console.log("Error");
      console.log(err);
    });

  return mongoose.connection;
};
