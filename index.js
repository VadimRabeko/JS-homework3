'use strict';

// 1. TASK:
// Написать функцию, которая принимает параметрами два массива и сливает их в объект так,
// что элементы первого массива становятся ключами, а второго - значениями.

function arrUnion(a, b) {
  let res = {};
  for (let i = 0; i < a.length; i++) {
    res[a[i]] = b[i];
  }
  return res;
}
console.log(arrUnion([1, 2, 3, 4], [5, 6, 7, 8]));

// 2. TASK:
// Дан массив вида [1, 2, 3, 4, 5, 6, 7, 8, 9]. Сделайте функцию, которая будет разбивать его в двухмерный массив.
// Первым параметром функция принимает массив для разбиения, а вторым - сколько элементов должно быть в подмассиве.
// Например, так
// ```javascript
// func([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)[([1, 2, 3], [4, 5, 6], [7, 8, 9])]; // Мы получим
// ```

function inception(a, b) {
  for (let i = 0; i < Math.ceil(a.length / b); i++) {
    a[i] = a.slice(i * b, i * b + b);
  }
  a.splice(Math.ceil(a.length / b, a.length));
  return a;
}

console.log(inception([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));

// 3. TASK:
// Фильтр юзеров
// Создать массив объектов для юзеров.
// Прим.
// ```javascript
// [{name: ‘Ivan’, age: 18}, {name: ‘Petr’, age: 12}, {name: ‘Sidor’, age: 25}, {...}, ...]
// ```
// Написать скрипт, который будет на выходе отдавать два массива. Первый с совершеннолетними пользователями,
//второй с несовершеннолетними.

let arr = [
  { name: 'Vadim', age: 27 },
  { name: 'youngVadim', age: 15 },
  { name: 'oldVadim', age: 77 },
];

function ageSort(a) {
  let adultArr = [];
  let minorArr = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i].age > 17) {
      adultArr.push(a[i]);
    } else {
      minorArr.push(a[i]);
    }
  }
  let res = [adultArr, minorArr]; // не понимаю как можно вернуть два массива за раз, поэтому возвращаю двухмерный массив
  return res;
}

console.log(ageSort(arr));

// 4. TASK:
// - Создайте массив из 5 любых элементов.
// - Напишите программу, которая будет клонировать заданный массив, не изменяя оригинала.
// - Склонированный массив вывести в консоль

let arr = [1, 2, 3, 4, 5]; //

function arrClone(a) {
  let res = [];
  for (let i = 0; i < a.length; i++) {
    res[i] = a[i];
  }
  return res;
}

console.log(arrClone(arr));

// 5. TASK:
// 5.1 написать ф-цию, которая принимает в качестве параметра массив чисел,
// фильтрует его и возвращает массив нечетных чисел [1, 2, 3] -> [1, 3]
// 5.2 написать ф-цию, которая принимает в качестве параметра массив чисел
// и возвращает массив их квадратов // [1, 2, 3, 4] -> [1, 4, 9, 16]
// 5.3 написать функцию, которая в качестве параметра принимает массив с разными типами данных.
// возвращает true, если в массиве есть строка, возвращает false, если в массиве строк нет

// 5.1;

let arr = [1, 2, 3, 4, 5];

function hateEven(a) {
  let res = a.filter(function (i) {
    return i % 2 != 0;
  });
  return res;
}

console.log(hateEven(arr));

// 5.2;

let arr = [1, 2, 3, 4, 5];

function expArr(a) {
  let res = a.map(function (i) {
    return i ** 2;
  });
  return res;
}

console.log(expArr(arr));

// 5.3;

let arr = [1, 'str', { name: 'noName' }];

function findStr(a) {
  let res = a.some(function (i) {
    return typeof i === 'string';
  });
  return res;
}

console.log(findStr(arr));

// 6. TASK:
//- Написать ф-цию, которая принимает массив объектов типа {name: 'Jonh', age: 20}
//- и возвращает массив значений лежащих в поле age
//```javascript
//function getAges(array) {}
//getAges([
//  { name: "Sergey", age: 33 },
//  { name: "Daria", age: 33 },
//]); // => [33, 33]
//```

let arr = [
  { name: 'Vadim', age: 27 },
  { name: 'youngVadim', age: 15 },
  { name: 'oldVadim', age: 77 },
];

function ageArr(a) {
  let res = [];
  for (let i = 0; i < a.length; i++) {
    res[i] = a[i].age;
  }
  return res;
}
console.log(ageArr(arr));

// 7. TASK:
// - Написать ф-цию, которая принимает массив объектов типа {name: 'Jonh', age: 20}
// - и вторым параметром ключ, по которому надо собрать массив
// ```javascript
// function getAges(array, key) {}
// getAges(
//   [
//     { name: "Sergey", age: 33 },
//     { name: "Daria", age: 33 },
//   ],
//   "name"
// ); // => ['Sergey', 'Daria']
// getAges(
//   [
//     { name: "Sergey", age: 33 },
//     { name: "Daria", age: 33 },
//   ],
//   "age"
// ); // => [33, 33]
// ```

let arr = [
  { name: 'Vadim', age: 27 },
  { name: 'youngVadim', age: 15 },
  { name: 'oldVadim', age: 77 },
];

function ageArr(a, b) {
  let res = [];
  if (b == 'age') {
    for (let i = 0; i < a.length; i++) {
      res[i] = a[i].age;
    }
  }
  if (b == 'name') {
    for (let i = 0; i < a.length; i++) {
      res[i] = a[i].name;
    }
  }
  return res;
}
console.log(ageArr(arr, 'name'));

// 8. TASK:
// - Написать ф-цию, которая принимает массив объектов.
// - Значения этих объектов - числа. Вернуть объект с суммами ключей
// ```javascript
// function calculate(array) {}
// calculate([
//   { x: 1, z: 2, y: 3 },
//   { x: 10, z: 21, y: 4 },
//   { x: 2, z: 3, y: 4 },
//   { a: 1, b: 2 },
// ]);
// // => { x: 13, z: 26, y: 11, a: 1, b: 2 }

let arr = [
  { x: 1, z: 2, y: 3 },
  { x: 10, z: 21, y: 4 },
  { x: 2, z: 3, y: 4 },
  { a: 1, b: 2 },
];

function objSum(a) {
  let res = {};

  for (let i = 0; i < a.length; i++) {
    for (let k in a[i]) {
      if (res[k] === undefined) {
        res[k] = a[i][k];
      } else {
        res[k] += a[i][k];
      }
    }
  }

  return res;
}

console.log(objSum(arr));

// 9. TASK:
// - Необходимо создать массив из 15 элементов. В массиве обязательно должны быть одинаковые значения.
// - Напишите код, который уберет эти дубликаты из созданного массива.

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7];

function hateEqual(a) {
  let res = a.filter(function (i, k) {
    return a.indexOf(i) === k;
  });
  return res;
}

console.log(hateEqual(arr));

// 10. TASK:
// - Напишите код, который подсчитает количество повторяющихся элементов в массиве.
// - И вывести это количество в консоль.

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7];

function equalQuantity(a) {
  let res = a.filter(function (i, k) {
    return a.indexOf(i) !== k;
  });
  return res.length;
}

console.log(equalQuantity(arr));

//  11. TASK:
// - Напишите код, который разворачивает исходный массив и сохраняет это в новую переменную.
// - Например: исходный массив - [1, 2, 3], результирующий массив - [3, 2, 1]

let arr = [1, 2, 3, 4, 5];

//изменяя исходную переменную
function rev(a) {
  let res = a.reverse();
  return res;
}
//неизменяя иисходную переменную
function rev(a) {
  let res = [];
  a.forEach(function (i) {
    res.unshift(i);
  });
  return res;
}

console.log(rev(arr));
console.log(arr);

// 12. TASK:
//- Создать массив из 20 чисел. Необходимо высчитать сумму всех элементов.(Используем reduce)

let arr = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

function sum(a) {
  let res = a.reduce(function (i, k) {
    return i + k;
  });
  return res;
}

console.log(sum(arr));

// 13. TASK:
// - Создать массив из 10 чисел. Необходимо создать новый массив, в котором числа будут возведены в квадрат.
// - Например:
//   ```javascript
//       [1,2,3] -> [1,4,9].
//   ```

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function arrExpNewVariable(a) {
  let res = [];
  a.forEach(function (i) {
    res.push(i ** 2);
  });
  return res;
}

console.log(arrExpNewVariable(arr));

// 14. TASK:
// - Создать массив объектов с полями: имя, пол. Разделить этот массив на 2 массива (женский и мужской).
// - Использовать reduce.

let arr = [
  { name: 'vadim', sex: 'male' },
  { name: 'lera', sex: 'female' },
  { name: 'vadimka', sex: 'male' },
  { name: 'lerka', sex: 'female' },
  { name: 'vadimio', sex: 'male' },
  { name: 'lerio', sex: 'female' },
];

function arrDiv(a) {
  let male = [];
  let female = [];
  let res = [];
  a.reduce(function (i, k) {
    if (k.sex === 'male') {
      return male.push(k);
    }
    if (k.sex === 'female') {
      return female.push(k);
    }
  }, 0);
  res.push(male);
  res.push(female);
  return res;
}

console.log(arrDiv(arr));

// 15. TASK:
// - Написать функцию, которая принимает первым аргументом массив,
// - а вторым любое значение, функция должна вернуть индекс если такое значение есть в массиве и -1 если его нет.
// - (indexOf, findIndex не использовать)

let arr = [1, 2, 3, 4, 5];

function valueCheck(a, b) {
  let res = -1;
  for (let i = 0; i < a.length; i++) {
    if (a[i] === b) {
      res = i;
    }
  }
  return res;
}

console.log(valueCheck(arr, 3));

// 16. TASK:
// - Написать функцию, которая принимает массив из чисел, а возвращает отсортированный массив.
// - Для сортировки можно использовать метод sort, но еще лучше будет если попробовать написать свою сортировку.

let arr = [44, 55, 2, 0, 99, 14, 3];

function arrSort(a) {
  let res = [];

  for (let i = 0; i < a.length; i++) {
    for (let k = i; k < a.length; k++) {
      if (a[i] > a[k]) {
        let x = a[i];
        a[i] = a[k];
        a[k] = x;
      }
    }
    res.push(a[i]);
  }

  return res;
}

console.log(arrSort(arr));

// 17. TASK:
// - Написать функцию сравнения двух массивов, которая возвращает true или false в зависимости от того,
// - одинаковые у них элементы или нет.

let arr = [1, 2, 3];
let arr1 = [1, 2, 3];

function equalArr(a, b) {
  let res = 0;
  for (let i of a) {
    if (a[i] !== b[i]) {
      res++;
    }
  }
  if (res > 0) {
    return 'false';
  } else {
    return 'true';
  }
}

console.log(equalArr(arr, arr1));

// 18. TASK:
// - Описание задачи: Напишите функцию, которая разделит массив на части заданного размера и
// - вернет массив элементами которого являются эти части.
// - Пример функции:
//   ```javascript
//       splitArray([1, 2, 3, 4, 5], 2) => [[1, 2], [3, 4], [5]]
//   ```

function splitArr(a, b) {
  let res = [];
  for (let i = 0; i < Math.ceil(a.length / b); i++) {
    res[i] = a.slice(i * b, i * b + b);
  }

  return res;
}

console.log(splitArr([1, 2, 3, 4, 5], 2));

// 19. TASK:
// - Напишите функцию, которая очищает массив от нежелательных значений,
// - таких как false, undefined, пустые строки, 0, null.

let arr = [1, null, false, 0, 'a', , undefined, NaN, ' ', {}];

function remove(a) {
  let res = [];
  a.forEach(function (i) {
    if (Boolean(i) === true) {
      res.push(i);
    }
  });
  a = res;
  return a;
}

console.log(remove(arr));
