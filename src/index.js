const { version } = require('../package.json')
const { Command } = require('commander')
const { init } = require('./shim')
const path = require("path");

function main () {
  const program = new Command()
  program
    .version(version)
    .description(`CLI tool for spining up a shim for holochain.
  example
    lair-shim -t // to run in test mode
  `)
    .requiredOption('-p, --path <path>', 'assigns path to run lair-shim')
    .requiredOption('-l, --lair_keystore_path <path>', 'path to running lair-keystore')
    .option('-t, --test', 'Run lair-shim in test mode')

    program.parse(process.argv);

    const options = program.opts();

    const SHIM_PATH = path.resolve(__dirname, options.path);
    const LAIR_SOCKET = path.resolve(__dirname, options.lair_keystore_path);

    if (options.test) {
      console.log("Running Lair Shim in test mode...");
      init(LAIR_SOCKET, SHIM_PATH, () => {
        return null;
      });
    }
    else {
      console.log("Running Lair Shim...");
      init(LAIR_SOCKET, SHIM_PATH, () => {
        // TODO: This function needs to be uspader for production
        return null;
      });
    }
}

try {
  main()
} catch (e) {
  console.error(e.message)
  process.exit(1)
}
