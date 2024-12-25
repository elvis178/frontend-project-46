import path from 'path';
import process from 'process';
import fs from 'fs';
import parseFile from './parsers.js';
import buildDiff from './buildDiff.js';
import formatDiff from './formatters/index.js';

const readFileContent = (filepath) => {
  const currentDirectory = process.cwd();
  const absoluteFilePath = path.resolve(currentDirectory, filepath);
  return fs.readFileSync(absoluteFilePath, 'utf-8');
};

const fileExtension = (filepath) => path.extname(filepath).slice(1).toLowerCase();

const genDiff = (filepath1, filepath2, format = 'stylish') => {
  const content1 = readFileContent(filepath1);
  const content2 = readFileContent(filepath2);
  const parsedFile1 = parseFile(fileExtension(filepath1), content1);
  const parsedFile2 = parseFile(fileExtension(filepath2), content2);
  const diffTree = buildDiff(parsedFile1, parsedFile2);
  return formatDiff(diffTree, format);
};

export default genDiff;
