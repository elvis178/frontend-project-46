import _ from 'lodash';

const replacer = '    ';

const formatValue = (data, depth) => {
  if (!_.isObject(data)) {
    return `${data}`;
  }

  const currentReplacer = replacer.repeat(depth);
  const entries = Object.entries(data);
  const strings = entries.map(([key, value]) => `${currentReplacer}    ${key}: ${formatValue(value, depth + 1)}`);
  return `{\n${strings.join('\n')}\n${currentReplacer}}`;
};

const formatStylish = (data) => {
  const iter = (obj, depth) => {
    const currentReplacer = replacer.repeat(depth);
    const result = obj.flatMap((node) => {
      const {
        key, oldValue, value, type,
      } = node;
      switch (type) {
        case 'added':
          return `${currentReplacer}  + ${key}: ${formatValue(value, depth + 1)}`;
        case 'deleted':
          return `${currentReplacer}  - ${key}: ${formatValue(value, depth + 1)}`;
        case 'unchanged':
          return `${currentReplacer}    ${key}: ${formatValue(value, depth + 1)}`;
        case 'changed':
          return `${currentReplacer}  - ${key}: ${formatValue(oldValue, depth + 1)}\n${currentReplacer}  + ${key}: ${formatValue(value, depth + 1)}`;
        case 'hasChild':
          return `${currentReplacer}    ${key}: ${iter(value, depth + 1)}`;
        default:
          throw new Error('something wrong');
      }
    });
    return `{\n${result.join('\n')}\n${currentReplacer}}`;
  };
  return iter(data, 0);
};

export default formatStylish;