import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';
import del from 'rollup-plugin-delete';
import copy from 'rollup-plugin-copy';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import nodeResolve from '@rollup/plugin-node-resolve';
import pkg from './package.json' assert { type: 'json' };

const BANNER = '#!/usr/bin/env node';

export default {
    input: 'src/index.ts', // Entry point for your library
    output: [
        {
            file: pkg.main, // ES module format
            format: 'esm',
            sourcemap: true,
            plugins: [
                terser({
                    ecma: 2020,
                    mangle: { toplevel: true },
                    compress: {
                        module: true,
                        toplevel: true,
                        unsafe_arrows: true,
                        drop_console: true,
                        drop_debugger: true,
                    },
                    output: { quote_style: 1 },
                }),
            ],
            banner: BANNER,

        },
    ],
    external: [
        ...Object.keys(pkg.scripts || {}),
        ...Object.keys(pkg.dependencies || {}),
        ...Object.keys(pkg.peerDependencies || {}),
    ],
    plugins: [
        peerDepsExternal(), // Exclude peer dependencies from the bundle
        typescript(), // Compile TypeScript files
        nodeResolve(), // Resolve node_modules
        copy({
            targets: [
                {
                    src: [
                        '../LICENSE',
                        '../README.md',
                        './package.json'
                    ],
                    dest: 'dist'
                },
            ],
            hook: 'writeBundle',
            copyOnce: true,
            copySync: true,
        }),
        del({ targets: ['dist'] }), // Clean the output directory
    ],
    external: [], // Specify external dependencies here
};
