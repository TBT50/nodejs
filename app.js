const express = require("express");
const app = express();
const PORT = 8080;

app.get("/", (req, res) => {
  res.write("<h1>Main Page</h1>");
  res.end();
});

app.listen(PORT, () => {
  console.log("Server is running!!!");
});
