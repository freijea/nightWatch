#! /usr/bin/env node

const debounce  = require('lodash.debounce');
const chokidar  = require('chokidar');
const program   = require('caporal');
const pjson     = require('./package.json');
const fs        = require('fs');
const { spawn } = require('child_process');
const chalk     = require('chalk');

program.version(pjson.version)
    .argument('[filename]','Name of a file to execute')
    .action(async (args) => {
        const {filename} = args;
        name = filename || 'index.js';

        try {
            await fs.promises.access(name);
        } catch (err) {
            throw new Error(`Could not find the file ${name} or user doesn't have appropriate access to the file ${name}`);
        }

        let proc;
        const start = debounce(() => {
            if(proc){
                proc.kill();
                console.log(chalk.bold.red(`All processes running were terminated`));
            }

            console.log(chalk.bold.blue('Project running started'));
            proc = spawn('node', [name], { stdio: 'inherit' });
          },300);

        chokidar.watch(process.cwd())
                .on('add', start)
                .on('change', start)
                .on('unlink', start);
    });

program.parse(process.argv);