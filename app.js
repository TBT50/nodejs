// Load HTTP module
const http = require("http");

const port = 8080;
const hostname = "localhost";

// Create HTTP server
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>Welcome to the main page</h1>");
    res.write(
      `<form action='message' method='post'>
        <input type='text' name='message'><button type='submit'>Send a message</button>
      </form>`
    );
  } else if (req.url === "/message") {
    res.write("<h1>Messages</h1>");
  }
  res.end();
});

server.listen(port, hostname, () =>
  console.log(`Server is running at http://${hostname}:${port}`)
);
