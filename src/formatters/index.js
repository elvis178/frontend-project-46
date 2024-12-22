import getStylishFormat from './stylish.js';
import getPlainformat from './plain.js';

const formatDiff = (diff, format) => {
  switch (format) {
    case 'stylish':
      return getStylishFormat(diff);
    case 'json':
      return JSON.stringify(diff, null, '');
    case 'plain':
      return getPlainformat(diff);
    default:
      throw new Error(`Unknown format: ${format} (ಡ‸ಡ). Choose 'json', 'plain' or 'stylish'`);
  }
};
export default formatDiff;
