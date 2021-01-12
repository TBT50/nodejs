const http = require("http");

const PORT = 8080;
const host = "localhost";

const server = http.createServer((req, res) => {
  res.statusCode = 203;
  res.setHeader("Content-type", "text/plain");
  res.end("bbbb");
});

server.listen(8080, host, () => {
  console.log(`Server is running http://${host}:${PORT}/`);
});
