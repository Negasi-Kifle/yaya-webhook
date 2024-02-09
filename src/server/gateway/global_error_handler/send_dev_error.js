/**
 * Send Dev error
 * @param {err} Custom or Default error object
 * @param {res} Response object
 */

module.exports = (err, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
    error: err,
    errorStack: err.stack,
  });
};
