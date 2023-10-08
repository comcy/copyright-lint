#!/usr/bin/env node
/**
 * @copyright Copyright (c) 2023 Christian Silfang
 */

import * as fs from 'fs';
import { Cli } from './cli';
import { ConfigReader } from './config-reader/config-reader';


export class CopyrightLinter {

    constructor() {

    }

    public lint() {

        let fileContent = fs.readFileSync(process.cwd()+ '/package.json', 'utf-8');
        // console.log(fileContent);

        // console.log('START SCAN >>> ', fileContent);
    }


}

// const cli = new Cli();
// cli.program

const baseHref = process.cwd();
// console.log('exec folder:::', baseHref);

const configReader = new ConfigReader();
// console.log('config:::', configReader.get());

const linter = new CopyrightLinter();
linter.lint();