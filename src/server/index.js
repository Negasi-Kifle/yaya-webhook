// Http
const http = require("http");

// App
const app = require("./gateway");

// DB Config
const dbConfig = require("./db");

// Inititate the server

module.exports = () => {
  // Server
  const server = http.createServer(app);

  // Port
  const PORT = process.env.PORT || 3000;

  // Listen on the server
  server.listen(PORT, () => {
    console.log(`Listening on ${PORT}...`);
  });

  // Connect DB
  const mongodbConn = dbConfig.mongodbConn();

  // Majestic Close
  process.on("SIGINT", () => {
    server.close();
    mongodbConn.close();
  });
};
