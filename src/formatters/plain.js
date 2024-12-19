import _ from 'lodash';

const stringify = (data) => {
  if (_.isObject(data)) {
    return '[complex value]';
  }
  return typeof data === 'string' ? `'${data}'` : data;
};

const getPlainformat = (data) => {
  const iter = (obj, path) => {
    const values = Object.values(obj);
    const strings = values.flatMap((node) => {
      const {
        key, oldValue, value, type,
      } = node;
      const newPath = path === '' ? `${key}` : `${path}.${key}`;
      switch (type) {
        case 'added':
          return `Property '${newPath}' was added with value: ${stringify(value)}`;
        case 'deleted':
          return `Property '${newPath}' was removed`;
        case 'changed':
          return `Property '${newPath}' was updated. From ${stringify(oldValue)} to ${stringify(value)}`;
        case 'hasChild':
          return iter(value, newPath);
        case 'unchanged':
          return [];
        default:
          throw new Error('Something wrong');
      }
    });
    return strings.filter((item) => item !== undefined).join('\n');
  };
  return iter(data, '');
};

export default getPlainformat;