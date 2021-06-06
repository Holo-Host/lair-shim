// const { version } = require('../package.json')
// const { Command } = require('commander')
const { init } = require('./shim')
const path = require("path");
const WH_SERVER_PORT = path.resolve(__dirname, '../shim/socket');
const LAIR_SOCKET = path.resolve(__dirname, '../keystore/socket');

init(LAIR_SOCKET, WH_SERVER_PORT, () => {
  return null;
});

// function main () {
//   const program = new Command()
//   program
//     .version(version)
//     .description(`CLI tool for spining up a shim for holochain.
//   example
//     lair-shim -t // to run in test mode
//   `)
//     .option('-t, --test', 'Run lair-shim in test mode')
//     .option('-p, --path <path>', 'assigns path to run lair-shim', 4444)
//
//     program.parse(process.argv);
//
//     const options = program.opts();
//     if (options.test) {
//       console.log("Running Lair Shim in test mode...");
//       init(LAIR_SOCKET, WH_SERVER_PORT, () => {
//         return null;
//       });
//
//     }
//     else {
//       console.log("Running Lair Shim...");
//       init(LAIR_SOCKET, WH_SERVER_PORT, () => {
//         return null;
//       });
//     }
// }
//
// try {
//   main()
// } catch (e) {
//   console.error(e.message)
//   process.exit(1)
// }
