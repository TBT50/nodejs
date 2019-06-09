const http = require("http");

const settings = {
  port: 8080,
  hostname: "127.0.0.1"
};

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "asdsad");
  res.write("<html>");
  res.write("<head>");
  res.write("<meta charset='utf-8'/>");
  res.write("<title>An awesome title</title>");
  res.write("</head>");
  res.write("<body><h1>The best header ever!!!</h1></body>");
  res.write("</html>");
  res.end();
  console.log(req.headers, req.url, req.method, res.setHeader, res.write);
});

server.listen(settings.port, settings.hostname, () => {
  console.log(
    `Server running at http://${settings.hostname}:${settings.port}/`
  );
});
