import fs from 'fs';
import yaml from 'yaml';
import path from 'path';

const parseFile = (filePath) => {
  const fileData = fs.readFileSync(filePath, 'utf-8');

  const fileExtension = path.extname(filePath).slice(1).toLowerCase()

  if (fileExtension === 'json') {
    return JSON.parse(fileData);
  }

  if (fileExtension === 'yml' || fileExtension === 'yaml') {
    return yaml.parse(fileData);
  }
  throw new Error(`Unsupported file format: ${fileExtension}`);
};

export default parseFile;