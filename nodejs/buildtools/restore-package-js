const fs = require("fs"); // read lib name from cmd param

const workingDirectory = process.env.PWD;

const PKG_ORIGIN_PATH = `${workingDirectory}/package.json`;
const PKG_CACHED_PATH = `${workingDirectory}/package-cached.json`;

console.log("restore ...");

fs.unlinkSync(PKG_ORIGIN_PATH);

fs.renameSync(PKG_CACHED_PATH, PKG_ORIGIN_PATH);
