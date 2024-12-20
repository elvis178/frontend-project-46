import path from 'path'; //resolve
import process from 'process'; //cwd
import parseFile from './parsers.js';
import buildDiff from './buildDiff.js';
import formatDiff from './formatters/index.js';

const genDiff = (filepath1, filepath2, format = 'stylish') => {
  const absolutePath1 = path.resolve(process.cwd(), filepath1);
  const absolutePath2 = path.resolve(process.cwd(), filepath2);

  const file1Data = parseFile(absolutePath1);
  const file2Data = parseFile(absolutePath2);

  const diffFree = buildDiff(file1Data, file2Data);

  return formatDiff(diffFree, format);
};

export default genDiff;
