// Load modules
const http = require("http");
const fs = require("fs");

const port = 8080;
const hostname = "localhost";

let data = "Lorem ipsum";

// Create HTTP server
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>Welcome to the main page</h1>");
    res.write(
      `<form action='message' method="post">
        <input type='text' name='message'><button type='submit'>Send a message</button>
      </form>`
    );
  } else if (req.url === "/message" && req.method === "POST") {
    fs.writeFileSync("./note.txt", data);
    res.writeHead(302, { Location: "/jjj" });
    console.log("File written successfully.\n");
    console.log("The written file has the following content:");
    console.log(fs.readFileSync("./note.txt", "utf-8"));
  } else {
    res.write("<h1>This page does not exist, nothing to do here</h1>");
  }
  res.end();
});

server.listen(port, hostname, () =>
  console.log(`Server is running at http://${hostname}:${port}`)
);
