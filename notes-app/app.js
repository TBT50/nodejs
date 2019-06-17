const myNotes = require("./notes");
const validator = require("validator");

const notes = myNotes();

console.log(notes);
console.log(validator.isEmail("abc@exa$%le.com"));
console.log(
  validator.isURL("https://wsdfdsfsdfww.wsdfdsfsdfp.ppzsdfdsfl.asdasd")
);
