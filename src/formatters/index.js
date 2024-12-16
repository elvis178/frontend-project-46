import formatStylish from './stylish.js';
import yaml from 'yaml';

const formatDiff = (diff, format) => {
  switch (format) {
    case 'stylish':
      return formatStylish(diff);
    case 'json':
      return JSON.stringify(diff, null, '');
    case 'yml':
      return yaml.stringify(diff);
    default:
      throw new Error(`Unknown format: ${format}. Choose 'json' or 'yml/yaml'`);
  }
}
export default formatDiff;