/**
 * Send Dev error
 * @param {err} Custom or Default error object
 * @param {res} Response object
 */

module.exports = (err, res) => {
  if (err.isOperational) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  } else {
    res.status(500).json({
      status: "ERROR",
      message: "Opps!! Unknown error",
    });
  }
};
