const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");
const { initRepo } = require("./controllers/init");
const { addRepo } = require("./controllers/add");
const { makeCommit } = require("./controllers/commit");
const { makePush } = require("./controllers/push");
const { makeRevert } = require("./controllers/revert");

yargs(hideBin(process.argv))
  .command("init", "Initialise a new repository", {}, initRepo)
  .command(
    "add <file>",
    "Aadding file to the staging",
    (yargs) => {
      yargs.positional("file", {
        describe: "File to add To the Stagging area",
        type: "String",
      });
    },
    addRepo
  )
  .command(
    "commit <commit message>",
    "making a commit",
    (yargs) => {
      yargs.positional("commit message", {
        describe: "File is being commited",
        type: "string",
      });
    },
    makeCommit
  )
  .command("push", "Pushing a new code", {}, makePush)
  .command("pull", "Pulling a new code", {}, makePull)
  .command("revert <commit id >", "reverting a new code", (yargs)=>{
    yargs.positional("commit id",{
      describe: "reverting the previous code",
      type: "String",
    });
  }, makeRevert)

  .demandCommand(1, "You need atleast one command")
  .help().argv;
