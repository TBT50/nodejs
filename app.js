const http = require("http");

function requestListener(request, response) {
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.write("ELO ZIOMKI");
  response.end();
}

const server = http.createServer(requestListener);

server.listen(8080, "localhost", function() {
  console.log("SERVER IS RUNING");
});
