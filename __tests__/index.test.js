import path from 'path';
import url from 'url';
import fs from 'fs';
import { expect, test } from '@jest/globals';
import genDiff from '../src/index.js';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

// Массив с тестовыми кейсами
const testCases = [
  ['file1.json', 'file2.json', 'stylish', 'expected-stylish.txt'],
  ['file1.yml', 'file2.yml', 'stylish', 'expected-stylish.txt'],
  ['file1.json', 'file2.json', 'plain', 'expected-plain.txt'],
  ['file1.json', 'file2.json', 'json', 'expected-json.txt'],
];

test.each(testCases)(
  'gendiff between %s and %s files in %s format',
  (file1, file2, format, expectedFile) => {
    const filepath1 = getFixturePath(file1);
    const filepath2 = getFixturePath(file2);
    const result = genDiff(filepath1, filepath2, format);
    const expected = readFile(expectedFile);

    // Для дебага
    console.log(result);

    expect(result).toEqual(expected);
  },
);
