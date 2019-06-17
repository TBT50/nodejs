const http = require("http");

const chalk = require("chalk");

const server = http.createServer((request, response) => {
  console.log(chalk.green("SUCCESS, request recieved!"));
  response.write("<html><head><title>Node app</title></head>");
  response.write("<body>");
  response.write("<h1>Welcome</h1>");
  response.write("</body></html");
  response.end();
});

const settings = {
  port: 8080,
  host: "127.0.0.1"
};

server.listen(settings.port, settings.host, () => {
  console.log(chalk.blue("Server ON"));
});
