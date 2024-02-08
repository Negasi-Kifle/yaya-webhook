const ntpClient = require("ntp-client");

// Function to synchronize server's clock with Yaya's server
function synchronizeTime() {
  const yayaServer = "104.21.8.141";
  ntpClient.getNetworkTime(yayaServer, 123, function (err, date) {
    if (err) {
      console.error("Error synchronizing time:", err);
    } else {
      console.log("Server time synchronized with Yaya's server:", date);
    }
  });
}

// Export the synchronizeTime()
module.exports = synchronizeTime;
