import * as fs from 'fs';

const workingDirectory = process.env.PWD;

const PKG_DIST_PATH = `${workingDirectory}/dist/package.json`;
// const PKG_CACHED_PATH = `${workingDirectory}/package-cached.json`;

console.info('Start cleanup `package.json` ...');

// Cleanup sections in package.json
const packageJson = JSON.parse(fs.readFileSync(PKG_DIST_PATH).toString());

delete packageJson.devDependencies;
console.info('... devDependencies');
delete packageJson.dependencies;
console.info('... dependencies');
delete packageJson.scripts;
console.info('... scripts');

fs.writeFileSync(PKG_DIST_PATH, JSON.stringify(packageJson, null, 2));

console.info('Finished cleanup `package.json`');