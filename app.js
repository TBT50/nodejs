const http = require("http");

function requestListener(req, res) {
  console.log("TEST");
}

const server = http.createServer(requestListener);

server.listen(8080, "localhost", () => console.log("Server is running"));
