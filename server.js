const http = require("http");

const PORT = 8080;
const host = "localhost";

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-type", "text/html");
  res.end("<h1>What's UP?</h1>");
});

server.listen(8080, host, () => {
  console.log(`Server is running http://${host}:${PORT}/`);
});
