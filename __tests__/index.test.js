import path from 'path';
import url from 'url';
import genDiff from '../src/index.js';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

test('genDiff with objects having different keys and values', () => {
  const filepath1 = getFixturePath('file1.json');
  const filepath2 = getFixturePath('file2.json');

  const expected = `{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
  }`;

  const result = genDiff(filepath1, filepath2);

  // Логирование для дебага
  console.log(result);
  
  // Сравниваем строки с учётом точного формата
  expect(result).toBe(expected);
});
