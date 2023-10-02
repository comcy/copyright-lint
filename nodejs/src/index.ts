#!/usr/bin/env node
/**
 * @copyright Copyright (c) 2023 Christian Silfang
 */

import { readFileSync } from 'fs';

// const file = readFileSync('./index.ts', 'utf-8');
// console.log('file:::', file);

export class CopyrightLinter {

    private config: string;

    constructor(configPath: string) {

        const configFile = readFileSync(configPath, 'utf-8');
        console.log('file:::', configFile);

        this.config = configFile;

    }

    lint() {

        console.log('START SCAN >>> ', this.config);
    }
}

const baseHref = process.cwd();
console.log('exec folder:::', baseHref);

const linter = new CopyrightLinter(baseHref + '/CPYR8-LINT.config.json');
linter.lint();