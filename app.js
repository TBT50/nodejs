const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/a") {
    res.setHeader("Contnet-Type", "text/html");
    res.write("<h1>MAIN PAGE</h1>");
    res.write("<a href='/admin'>Admin page</a>");
    res.write();
  }

  res.end();
});

server.listen(8080, "localhost", () => {
  console.log("Server is running");
});
