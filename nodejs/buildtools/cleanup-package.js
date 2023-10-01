const fs = require("fs"); // read lib name from cmd param

const workingDirectory = process.env.PWD;

const PKG_ORIGIN_PATH = `${workingDirectory}/package.json`;
const PKG_CACHED_PATH = `${workingDirectory}/package-cached.json`;

console.log("cleanup ...");

// Create a cached version of package.json
fs.copyFile(PKG_ORIGIN_PATH, PKG_CACHED_PATH, (err) => {
  if (err) {
    throw err;
  }
});

// Cleanup sections in package.json
const packageJson = JSON.parse(fs.readFileSync(PKG_ORIGIN_PATH).toString());

delete packageJson.devDependencies;
delete packageJson.dependencies;
delete packageJson.scripts;

fs.writeFileSync(PKG_ORIGIN_PATH, JSON.stringify(packageJson, null, 2));
