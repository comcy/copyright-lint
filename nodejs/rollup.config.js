import typescript from 'rollup-plugin-typescript2';
import banner from 'rollup-plugin-banner';
import pkg from './package.json' assert { type: 'json' };


const BANNER = `
  @license
	xxx - xxx.js - ${pkg.version}
	Released under the ISC License!.
`;

export default {
    input: 'src/index.ts', // Entry point for your library
    output: [
        {
            file: 'dist/index.cjs.js', // CommonJS format
            format: 'cjs',
            sourcemap: true
        },
        {
            file: 'dist/index.esm.js', // ES module format
            format: 'es',
            sourcemap: true
        }
    ],

    external: [
        ...Object.keys(pkg.scripts || {}),
        ...Object.keys(pkg.dependencies || {}),
        ...Object.keys(pkg.peerDependencies || {}),
        'fs'
    ],
    plugins: [
        typescript(), // Compile TypeScript files
    ],
    external: [], // Specify external dependencies here
};
