const configs = require("../../../../configs");
const AppError = require("../../../utils/appError");
const synchronizeTime = require("../../../utils/synchronize_time");
const crypto = require("crypto");

/**
 * Verifies the signature in the request header
 * @param {request} req - Request object
 * @param {response} res Response object
 * @param {next} next next() middleware
 * @returns
 */
module.exports = (req, res, next) => {
  try {
    // Secret key
    const expectedSecretKey = configs.secret_key;

    // Time window for valid timestamps in milliseconds
    const timestampWindow = 5 * 60 * 1000; // 5 minutes

    // Extract signature and timestamp from the "YAYA-SINGATURE" header
    const signatureParts = req.headers["yaya-signature"].split(",");
    const receivedSignature = signatureParts[0];
    const receivedTimestamp = parseInt(signatureParts[1]);

    synchronizeTime(); // Synchronize my server's time with Yaya's server

    // Check if the timestamp is within the valid time window
    const currentTimestamp = Date.now();
    if (currentTimestamp - receivedTimestamp > timestampWindow) {
      return next(new AppError("Signature invalid", 400));
    }

    // Concatenate all payload values into a single string and encode it to UTF-8 format
    const signedPayload = Object.values(req.body).join("");

    // Generate the expected HMAC SHA256 signature based on the signed payload and the secret key
    const expectedSignature = crypto
      .createHmac("sha256", expectedSecretKey)
      .update(signedPayload)
      .digest("hex");

    // Check signature
    if (receivedSignature !== expectedSignature) {
      return next(new AppError("Signature invalid", 404));
    }

    // Check secret key
    const receivedSecretKey = req.headers["secret-key"];
    if (receivedSecretKey !== expectedSecretKey) {
      return next(new AppError("Invalid secret key", 400));
    }

    // Go to next middleware
    next();
  } catch (error) {
    next(error);
  }
};
