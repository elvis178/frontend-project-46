import stylish from './stylish.js';

const formatDiff = (diff, format) => {
  switch (format) {
    case 'stylish':
      return stylish(diff);
    case 'json':
      return JSON.stringify(diff, null, '');
    default:
      throw new Error(`Unknown format: ${format}`);
  }
}
export default formatDiff;