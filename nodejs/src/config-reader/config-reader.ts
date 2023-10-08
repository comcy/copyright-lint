import * as fs from 'fs';

/**
 * A class for reading the configuration file.
 */
export class ConfigReader {

    /**
     * The content of the configuration file.
     */
    private configContent: string;

    /**
     * Sets the content of the configuration file.
     * @param configContent The content of the configuration file.
     */
    set(configContent: string) {
        this.configContent = configContent;
    }

    /**
     * Gets the content of the configuration file.
     * @returns The content of the configuration file.
     */
    get() {
        return this.configContent;
    }

    /**
     * Constructs a new ConfigReader instance.
     * @param baseHref The base directory path. (Default value as path of tool execution)
     * @param configPath The path to the configuration file. (Default value)
     */
    constructor(baseHref: string = process.cwd(), configPath: string = 'CPYR8-LINT.config.json') {

        this.configContent = 'no config found';

        const configFile = fs.readFileSync(`${baseHref}/${configPath}`, 'utf-8');
        // console.log('file:::', configFile);

        const config = JSON.parse(configFile);

        console.log('>>> ', config);
        console.log('>>> ', config.includes);
        console.log('>>> ', config.includes.extension[0]);


        this.configContent = configFile;

    }

}