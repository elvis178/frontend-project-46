import yaml from 'yaml';

const parseFile = (format, data) => {
  switch (format) {
    case 'json':
      return JSON.parse(data);
    case 'yml':
    case 'yaml':
      return yaml.parse(data);
    default:
      throw new Error(`Unsupported file format: ${format} (ಡ‸ಡ)`);
  }
};

export default parseFile;
