const express = require("express");
const app = express();
const PORT = 8080;

let notes = [
  {
    id: 1,
    content: "Learn Italian",
  },
  {
    id: 2,
    content: "Learn Express",
  },
  {
    id: 3,
    content: " Go for a walk",
  },
];

app.get("/", (req, res) => {
  res.write("<h1>Main Page</h1>");
  res.write(
    "<form action='message' method='POST'><input type='text'><button>SUBMIT</button></form>"
  );
  res.end();
});

app.post("/message", (req, res) => {
  res.write("<h1>The message has been sent</h1>");
  res.status(400).end();
});

app.get("/api/notes", (req, res) => {
  res.json(notes);
});

app.get("/api/notes/:id", (req, res) => {
  const id = Number(req.params.id);
  const note = notes.find((note) => note.id === id);

  if (note) {
    res.json(note);
  } else {
    res.status(404).end();
  }
});

app.delete("/api/notes/:id", (req, res) => {
  const id = Number(req.params.id);

  notes = notes.filter((note) => note.id !== id);
  res.status(204).end();
});

app.listen(PORT, () => {
  console.log(`Visit http://localhost:${PORT}`);
});
