const http = require("http");

const settings = {
  port: 3000,
  hostname: "127.0.0.1"
};

const server = http.createServer((request, response) => {
  console.log("ELO");
});

server.listen(settings.port, settings.hostname, () => {
  console.log(
    `Server running at http://${settings.hostname}:${settings.port}/`
  );
});
