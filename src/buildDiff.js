import _ from 'lodash';

const genDiff = (data1, data2) => {
  const keys1 = Object.keys(data1); // Ключи первого объекта
  const keys2 = Object.keys(data2); // Ключи второго объекта
  const keys = _.sortBy(_.union(keys1, keys2)); // Объединяем и сортируем ключи

  const result = keys.map((key) => {
    if (!Object.hasOwn(data1, key)) {
      // Если ключа нет в data1, значит он добавлен в data2
      return `+ ${key}: ${data2[key]}`;
    } else if (!Object.hasOwn(data2, key)) {
      // Если ключа нет в data2, значит он удален из data2
      return  `- ${key}: ${data1[key]}`;
    } else if (data1[key] !== data2[key]) {
      // Если значения ключа отличаются
      return `- ${key}: ${data1[key]}\n  + ${key}: ${data2[key]}`;
    }
    // Если значения не изменились, то ключ неизменен
    return `${key}: ${data1[key]}`;
  });

  return `{\n${result.join('\n')}\n}`; // Возвращаем результат
};

export default genDiff;