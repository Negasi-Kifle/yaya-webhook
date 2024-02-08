const app = require("./app");

// Http
const http = require("http");

// Start the server and export it
module.exports = () => {
  // Create server from the http module
  const server = http.createServer(app);
  const PORT = process.env.PORT ? process.env.PORT : 3300;

  // Listen on a given port
  server.listen(PORT, console.log("Server Listening on port ", PORT));

  // Majestic close
  process.on("SIGINT", () => {
    // Close the server
    server.close(console.log("Server is closed..."));
  });
};
