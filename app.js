// Load HTTP module
const http = require("http");

const port = 8080;
const hostname = "localhost";

// Create HTTP server
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write("<h1>Awesome Page</h1>");
  res.end();
});

server.listen(port, hostname, () =>
  console.log(`Server is running at http://${hostname}:${port}`)
);
