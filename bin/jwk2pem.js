#!/usr/bin/env node

const argv = require("yargs/yargs")(process.argv.slice(2))
    .command("$0 [jwk-json] [--include-pk]", "convert jwk to pem", (yargs) => {
        yargs
            .positional("jwk-json", {
                describe: "jwk as json file",
                default: "jwk.json",
            })
            .option("include-pk", {
                alias: "p",
                type: "boolean",
                default: false,
                description: "output private key",
            });
    })
    .help()
    .parse();

require("../index")(argv);
