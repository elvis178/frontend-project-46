import _ from 'lodash';

const buildDiff = (obj1, obj2) => {
  const keys1 = _.keys(obj1);
  const keys2 = _.keys(obj2);
  const sortedUnicKeys = _.sortBy(_.union(keys1, keys2));

  const resultObj = sortedUnicKeys.map((key) => {
    if (!Object.hasOwn(obj1, key)) {
      return { key, value: obj2[key], type: 'added' };
    }

    if (!Object.hasOwn(obj2, key)) {
      return { key, value: obj1[key], type: 'deleted' };
    }

    if (_.isEqual(obj1[key], obj2[key])) {
      return { key, value: obj1[key], type: 'unchanged' };
    }

    if (_.isPlainObject(obj1[key]) && _.isPlainObject(obj2[key])) {
      return { key, children: buildDiff(obj1[key], obj2[key]), type: 'nested' };
    }
    return {
      key,
      value: obj1[key],
      value2: obj2[key],
      type: 'changed',
    };
  });
  return resultObj;
};

export default buildDiff;
