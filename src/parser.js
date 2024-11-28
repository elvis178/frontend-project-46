import fs from 'fs';

const parseFile = (filePath) => {
  const fileData = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(fileData);
};

export default parseFile;