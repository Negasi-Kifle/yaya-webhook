const express = require("express");
const app = express();

// Import router files

// Import third party middleware

// Use third party middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Mount routes with router files
app.use("/test", function (req, res) {
  res.send("Hello world");
});

// Use the global error handler

// Export express app
module.exports = app;
