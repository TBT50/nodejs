const http = require("http");
const fs = require("fs");

const settings = {
  port: 8080,
  hostname: "127.0.0.1"
};

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>AWESOME SITE</title></head>");
    res.write("<body>");
    res.write(
      "<form action='/message' method='POST'><input type='text' name='message' /><button type='submit'>SEND MESSAGE</button></form>"
    );
    res.write("</body>");
    res.write("</html>");
    return res.end();
  }

  if (url === "/message" && method === "POST") {
    fs.writeFileSync("message.txt", "JAZDA JAZDA JAZDA");
    // Redirect User
    res.statusCode = 302;
    res.setHeader("Location", "/data");
    return res.end();
  }

  if (url === "/data" && method === "GET") {
    res.write("<h1>Data has been sent</h1>")
    return res.end();
  }

  res.write("<p>WHAT'S UP BRO?</p>");
  res.end();

  console.log(req.headers, req.url, req.method, req.host);
});

server.listen(settings.port, settings.hostname, () => {
  console.log(
    `Server running at http://${settings.hostname}:${settings.port}/`
  );
});
