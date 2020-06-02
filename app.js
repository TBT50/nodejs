// Load HTTP module
const http = require("http");

const port = 8080;
const hostname = "localhost";

// Create HTTP server
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("Welcome to the main page");
  } else if (req.url === "/test") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>Welcome to the test site</h1>");
  } else {
    res.write("Something went wrong");
  }
  res.end();
});

server.listen(port, hostname, () =>
  console.log(`Server is running at http://${hostname}:${port}`)
);
