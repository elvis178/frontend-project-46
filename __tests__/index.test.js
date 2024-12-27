import path from 'path';
import url from 'url';
import fs from 'fs';
import { expect, test } from '@jest/globals';
import genDiff from '../src/index.js';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

const testCases = [
  ['file1.json', 'file2.json', 'expected-stylish.txt', 'stylish'],
  ['file1.json', 'file2.yml', 'expected-stylish.txt', 'stylish'],
  ['file1.yml', 'file2.yml', 'expected-stylish.txt', 'stylish',],
  ['file1.yml', 'file2.json', 'expected-stylish.txt', 'stylish'],
  ['file1.json', 'file2.json', 'expected-json.txt', 'json',],
  ['file1.json', 'file2.yml', 'expected-json.txt', 'json',],
  ['file1.yml', 'file2.yml', 'expected-json.txt', 'json',],
  ['file1.yml', 'file2.json', 'expected-json.txt', 'json',],
  ['file1.json', 'file2.json', 'expected-plain.txt', 'plain',],
  ['file1.json', 'file2.yml', 'expected-plain.txt', 'plain',],
  ['file1.yml', 'file2.yml', 'expected-plain.txt', 'plain',],
  ['file1.yml', 'file2.json', 'expected-plain.txt', 'plain',],
];

const defaultFormatter = 'stylish';

test.each(testCases)(
  'gendiff between %s and %s files in %s format',
  (file1, file2, expectedFile, format = defaultFormatter) => {
    const filepath1 = getFixturePath(file1);
    const filepath2 = getFixturePath(file2);
    const result = genDiff(filepath1, filepath2, format);
    const expected = readFile(expectedFile);

    expect(result).toEqual(expected);
  },
);
