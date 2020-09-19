const express = require("express");
const app = express();
const PORT = 8080;

let notes = [
  {
    id: 1,
    content: "Learn italian",
  },
  {
    id: 2,
    content: "Go for a walk",
  },
  {
    id: 3,
    content: "Learn dance",
  },
];

app.get("/", (req, res) => {
  res.write("<h1>Hey Express, how are you?</h1>");
  res.write(
    "<form action='/info' method='POST'><input type='text'><button>Submit</button></form>"
  );
  res.end();
});

app.post("/info", (req, res) => {
  res.send("<h1>THE FORM HAS BEEN SUBMITTED</h1>");
});

app.get("/api/notes", (req, res) => {
  res.json(notes);
});

app.listen(PORT, () => console.log("Server is running"));
