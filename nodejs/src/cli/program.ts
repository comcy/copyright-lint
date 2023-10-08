import { Command } from 'commander';
// import pkg from './../../package.json' assert { type: 'json' };

export class Cli {

    public program!: Command;

    constructor() {
        this.program = new Command();

        this.program
            .version('1.0.0')
            .description('A simple TypeScript CLI')
            .command('hello', 'Print a hello message')
            .parse(process.argv);

        if (!process.argv.slice(2).length) {
            this.program.outputHelp();
        }

        console.log('program :::', this.program);

    }



}