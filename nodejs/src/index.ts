#!/usr/bin/env node
/**
 * @copyright Copyright (c) 2023 Christian Silfang
 */

import { readFileSync } from 'fs';

const file = readFileSync('../../test-files/typescript/sample.ts', 'utf-8');
console.log('file:::', file);




export class CopyrightLinter {

    private config: string;

    constructor(configPath: string) {
        this.config = require(`${configPath}`);

    }

    lint() {
        console.log('START SCAN');
    }
}

const baseHref = process.cwd();
console.log('exec folder:::', baseHref);

const linter = new CopyrightLinter(baseHref + '/cpyr8-lint.config.json');
linter.lint();