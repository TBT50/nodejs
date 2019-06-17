// File System module has to be required
const fs = require("fs");

fs.writeFileSync(
  "notes.txt",
  "This is the best note ever! Dont even try to do better, cuz it's not possible"
);

const appendedText = "Node seems to be more interesting that i though";

fs.appendFileSync("notes.txt", appendedText, () => {
  console.log("SAVED");
});

console.log(typeof fs);
