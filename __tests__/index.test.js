import path from 'path';
import url from 'url';
import fs from 'fs';
import { expect, test } from '@jest/globals';
import genDiff from '../src/index.js';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');


test('genDiff with objects having different keys and values', () => {
  const filepath1 = getFixturePath('file1.json');
  const filepath2 = getFixturePath('file2.json');
  const expected = readFile('expected-json.txt');

  const result = genDiff(filepath1, filepath2, 'json');

  // Логирование для дебага
  console.log(result);
  
  // Сравниваем строки с учётом точного формата
  expect(result).toEqual(expected);
});
