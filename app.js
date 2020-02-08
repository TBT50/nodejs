const http = require("http");

function requestListener(req, res) {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.write("Some awesome text");
  console.log(req.method);
  console.log(req.headers);
  res.end();
}

const server = http.createServer(requestListener);

server.listen(8080, "localhost", function() {
  console.log("SERVER IS RUNING");
});
