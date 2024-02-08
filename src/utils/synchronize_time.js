const ntpClient = require("ntp-client");

// Function to synchronize server's clock with Yaya's server
function synchronizeTime() {
  // Yaya's server IP/DNS
  const yayaServer = "pool.ntp.org";

  // Synchronise time
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
