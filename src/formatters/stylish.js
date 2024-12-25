import _ from 'lodash';

const signs = {
  added: '+',
  deleted: '-',
  unchanged: ' ',
  nested: ' ',
};

const createIndent = (depth) => ' '.repeat(depth * 4 - 2);

const stringify = (value, depth = 1) => {
  if (!_.isObject(value)) {
    return value;
  }
  const keys = Object.keys(value);
  const formattedKeys = keys.map(
    (key) => `${createIndent(depth + 1)}  ${key}: ${stringify(value[key], depth + 1)}`,
  );
  return `{\n${formattedKeys.join('\n')}\n  ${createIndent(depth)}}`;
};

const getStylishFormat = (item, depth = 1) => {
  switch (item.type) {
    case 'added':
    case 'deleted':
    case 'unchanged':
      return `${createIndent(depth)}${signs[item.type]} ${item.key}: ${stringify(item.value, depth)}`;
    case 'changed':
      return `${createIndent(depth)}${signs.deleted} ${item.key}: ${stringify(item.value, depth)}\n${createIndent(depth)}${signs.added} ${item.key}: ${stringify(item.value2, depth)}`;
    case 'nested':
      return `${createIndent(depth)}  ${item.key}: {\n${item.children
        .map((child) => getStylishFormat(child, depth + 1))
        .join('\n')}\n ${createIndent(depth)} }`;
    default:
      throw new Error(`Unexpected type: ${item.type}`);
  }
};

export default (changes) => {
  const formattedChanges = changes.map((change) => getStylishFormat(change, 1));
  return `{\n${formattedChanges.join('\n')}\n}`;
};
