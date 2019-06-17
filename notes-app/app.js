const myNotes = require("./notes");

const validator = require("validator");
const chalk = require("chalk");

const log = console.log;
const newColor = log(
  chalk.green(
    "I am a green line " +
      chalk.blue.underline.bold("with a blue substring") +
      " that becomes green again!"
  )
);
console.log(newColor);

const notes = myNotes();

console.log(notes);
console.log(validator.isEmail("abc@exa$%le.com"));
console.log(
  validator.isURL("https://wsdfdsfsdfww.wsdfdsfsdfp.ppzsdfdsfl.asdasd")
);

console.log(validator.isPostalCode("11-111", "PL"));
