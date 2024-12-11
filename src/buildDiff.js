import _ from 'lodash';

const buildDiff = (data1, data2) => {
  const keys1 = Object.keys(data1);
  const keys2 = Object.keys(data2);
  const keys = _.sortBy(_.union(keys1, keys2)); // Объединяем и сортируем ключи

  const result = keys.map((key) => {
    if (!Object.hasOwn(data1, key)) {
      // Если ключ отсутствует в data1, значит, он добавлен в data2
      return `+ ${key}: ${data2[key]}`;
    } else if (!Object.hasOwn(data2, key)) {
      // Если ключ отсутствует в data2, значит, он удалён из data2
      return `- ${key}: ${data1[key]}`;
    } else if (data1[key] !== data2[key]) {
      // Если значения ключей отличаются
      return `- ${key}: ${data1[key]}\n+ ${key}: ${data2[key]}`;
    }
    // Если значения одинаковы, ключ не изменился
    return `  ${key}: ${data1[key]}`;
  });

  return `{\n${result.join('\n')}\n}`;
};


export default buildDiff;