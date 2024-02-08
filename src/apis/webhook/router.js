const router = require("express").Router();
const { webHookController } = require("./controller");
const verifySignature = require("./middlewares/verify_signature");
const checkIPAddress = require("./middlewares/check_ip_address");

// Mount routes with their respective controller methods
router.post("/", verifySignature, checkIPAddress, webHookController);

// Export the router
module.exports = router;
