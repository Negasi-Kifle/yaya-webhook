const router = require("express").Router();
const { verifyWebhook } = require("./controllers");
const {
  validator,
  checkIPAddress,
  verifySignature,
} = require("../../middleware");
const { verifyWebhookValidation } = require("./validations");

// Mount routes with their respective middlewares and controller methods
router.post(
  "/",
  validator(verifyWebhookValidation),
  verifySignature,
  checkIPAddress,
  verifyWebhook
);

// Export the router
module.exports = router;
