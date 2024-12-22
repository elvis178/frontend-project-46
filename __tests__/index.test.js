import path from 'path';
import url from 'url';
import fs from 'fs';
import { expect, test } from '@jest/globals';
import genDiff from '../src/index.js';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

test('Json Gendiff, stylish-format', () => {
  const filepath1 = getFixturePath('file1.json');
  const filepath2 = getFixturePath('file2.json');
  const result = genDiff(filepath1, filepath2, 'stylish');
  const expectedFilePath = getFixturePath('expected-stylish.txt');
  fs.writeFileSync(expectedFilePath, result);
  const expected = readFile('expected-stylish.txt');

  // Для дебага
  console.log(result);

  expect(result).toEqual(expected);
});

test('Yml Gendiff, stylish-format', () => {
  const filepath1 = getFixturePath('file1.yml');
  const filepath2 = getFixturePath('file2.yml');
  const result = genDiff(filepath1, filepath2, 'stylish');
  const expectedFilePath = getFixturePath('expected-stylish.txt');
  fs.writeFileSync(expectedFilePath, result);

  const expected = readFile('expected-stylish.txt');

  // Для дебага
  console.log(result);

  expect(result).toEqual(expected);
});

test('Plain gendiff, plain-format', () => {
  const filepath1 = getFixturePath('file1.json');
  const filepath2 = getFixturePath('file2.json');
  const result = genDiff(filepath1, filepath2, 'plain');
  const expectedFilePath = getFixturePath('expected-plain.txt');
  fs.writeFileSync(expectedFilePath, result);
  const expected = readFile('expected-plain.txt');

  // Для дебага
  console.log(result);

  expect(result).toEqual(expected);
});

test('Json gendiff, json-format', () => {
  const filepath1 = getFixturePath('file1.json');
  const filepath2 = getFixturePath('file2.json');
  const expected = readFile('expected-json.txt');
  const result = genDiff(filepath1, filepath2, 'json');

  // Для дебага
  console.log(result);

  expect(result).toEqual(expected);
});
