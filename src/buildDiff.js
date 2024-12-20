import _ from 'lodash';

const buildDiff = (obj1, obj2) => {
  const sortedUnicKeys = _.sortBy(_.union(Object.keys(obj1), Object.keys(obj2)));
  const resultObj = sortedUnicKeys.map((key) => {
    const value1 = obj1[key];
    const value2 = obj2[key];

    // Если ключ отсутствует в obj1, значит он добавлен в obj2
    if (!Object.hasOwn(obj1, key)) {
      return { key, value: value2, type: 'added' };
    }

    // Если ключ отсутствует в obj2, значит он удален из obj2
    if (!Object.hasOwn(obj2, key)) {
      return { key, value: value1, type: 'deleted' };
    }

    // Если значения одинаковые, то ключ неизменен
    if (value1 === value2) {
      return { key, value: value1, type: 'unchanged' };
    }

    // Если значения отличаются и оба являются объектами, то вызываем рекурсивно buildDiff
    if (typeof value1 === 'object' && typeof value2 === 'object') {
      return { key, value: buildDiff(value1, value2), type: 'hasChild' };
    }

    // Если значения отличаются, то записываем как измененные
    return {
      key,
      oldValue: value1,
      value: value2,
      type: 'changed',
    };
  });
  return resultObj;
};

export default buildDiff;
