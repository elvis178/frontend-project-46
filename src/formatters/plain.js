import _ from 'lodash';

const stringify = (data) => {
  if (_.isObject(data)) {
    return '[complex value]';
  }
  return typeof data === 'string' ? `'${data}'` : data;
};

const getPlainFormat = (value, parent = '') => {
  switch (value.type) {
    case 'added':
      return `Property '${parent}${value.key}' was added with value: ${stringify(value.value)}`;
    case 'deleted':
      return `Property '${parent}${value.key}' was removed`;
    case 'unchanged':
      return null;
    case 'nested':
      return value.children.map((val) => getPlainFormat(val, `${parent + value.key}.`))
        .filter((item) => item !== null).join('\n');
    case 'changed':
      return `Property '${parent}${value.key}' was updated. From ${stringify(value.value)} to ${stringify(value.value2)}`;
    default:
      throw new Error(`Unknown type: ${value.type}`);
  }
};

export default (plain) => {
  const formattedElements = plain.map((element) => getPlainFormat(element));
  const nonNullElements = formattedElements.filter((item) => item !== null);
  return nonNullElements.join('\n');
};
