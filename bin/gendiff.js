#!/usr/bin/env node

import { Command } from 'commander';
import path from 'path';
import parseFile from '../src/parser.js'

const program = new Command();

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0')
  .option('-f, --format <type>', 'output format')
  .arguments('<filepath1> <filepath2>')
  .action((filepath1, filepath2) => {
    const absolutePath1 = path.resolve(process.cwd(), filepath1);
    const absolutePath2 = path.resolve(process.cwd(), filepath2);

    const file1Data = parseFile(absolutePath1);
    const file2Data = parseFile(absolutePath2);

    console.log("Contents of file1.json:");
    console.log(file1Data);
    console.log("Contents of file2.json:");
    console.log(file2Data);

  });

  
program.parse();