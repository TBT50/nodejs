const http = require("http");

const chalk = require("chalk");
const yargs = require("yargs");

const myNotes = require("./notes");

const server = http.createServer((request, response) => {
  console.log(chalk.green("SUCCESS, request recieved!"));
  response.write("<html><head><title>Node app</title></head>");
  response.write("<body>");
  response.write("<h1>Welcome</h1>");
  response.write("</body></html");
  response.end();
});

yargs.version("1.10.100");

// Create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  handler: function() {
    console.log("Adding a new note");
  }
});

yargs.command({
  command: "remove",
  describe: "Remove a note",
  handler: function() {
    console.log("Removing the note");
  }
});

yargs.command({
  command: "list",
  describe: "List your notes",
  handler: function() {
    console.log("Listing out the note");
  }
});

yargs.command({
  command: "read",
  describe: "Reading a note",
  handler: function() {
    console.log("Reading the note");
  }
});

if (yargs.command === "add") {
  console.log("Added a new note");
} else if (yargs.command === "remove") {
  console.log(chalk.bgRed("Removed a note"));
}

console.log(yargs.argv);

const settings = {
  port: 8080,
  host: "127.0.0.1"
};

server.listen(settings.port, settings.host, () => {
  console.log(chalk.blue("Server ON"));
});
