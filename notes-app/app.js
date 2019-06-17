// File System module has to be required
const fs = require("fs");

const newFile = fs.writeFileSync(
  "notes.txt",
  "This is the best note ever! Dont even try to do better, cuz it's not possible"
);

fs.appendFile("notes.txt", "WOW", () => {
  console.log("SAVED");
});

console.log(typeof fs);
