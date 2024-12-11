import path from 'path'; //resolve
import process from 'process'; //cwd
import parseFile from './parser.js';
import buildDiff from './buildDiff.js';




const genDiff = (filepath1, filepath2) => {
  const absolutePath1 = path.resolve(process.cwd(), filepath1);
  const absolutePath2 = path.resolve(process.cwd(), filepath2);
  
  const file1Data = parseFile(absolutePath1);
  const file2Data = parseFile(absolutePath2);

  const diff = buildDiff(file1Data, file2Data);

  return diff;
};

export default genDiff;

