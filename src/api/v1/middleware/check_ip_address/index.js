const configs = require("../../../../config");

/**
 * Checks if IP address of the client is in the whitelisted IP addresses of Yaya
 * @param {req} req Request object
 * @param {res} res Response object
 * @param {next} next next() middleware
 * @returns
 */
module.exports = (req, res, next) => {
  try {
    // Check IP address is valid
    const clientIP = req.ip;
    const validIPAddresses = JSON.parse(configs.valid_ip_address);
    if (!validIPAddresses.includes(clientIP)) {
      return next(new AppError("Your IP address is not in a whitelist", 400));
    }

    // Go to next middleware
    next();
  } catch (error) {
    next(error);
  }
};
