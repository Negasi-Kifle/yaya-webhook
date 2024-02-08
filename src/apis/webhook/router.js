const router = require("express").Router();
const { webHookController } = require("./controller");
const verifySignature = require("./middlewares/verify_signature");
const checkIPAddress = require("./middlewares/check_ip_address");
const validator = require("../../utils/validator");
const { validateCreateAPI } = require("./validation");

// Mount routes with their respective controller methods
router.post(
  "/",
  validator(validateCreateAPI),
  verifySignature,
  checkIPAddress,
  webHookController
);

// Export the router
module.exports = router;
