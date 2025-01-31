#!/usr/bin/env node

const path = require("path");
const spawn = require("child_process").spawn;
const electron = require("electron");

var args = process.argv.slice(2);
var src = path.resolve(path.join(__dirname, "src/athenapdf.js"));
args.unshift(src);

spawn(electron, args, {
    stdio: "inherit",
    cwd: path.resolve(process.cwd())
}).on('close', (code) => {
    //process.exit(code);
    console.log('code =>: ' + code);
});
