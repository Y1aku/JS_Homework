/*
Напишите функцию, принимающую на вход любое количество массивов
-  Функция возвращает массив, в котором будут находиться все переданные в функцию в виде чисел
-  Например: mergeArrays([1,2], [3,4], [5,6]) // [1,2,3,4,5,6]
-  Решить с использованием Spread operator
*/

const mergeArrays = [[1, 2], [3, 4], [5, 6]];

function spreadArrays(...arrays) {

    const newArray = [];

    for (const array of arrays) {
        newArray.push(...array);
    }

    return newArray;
}

console.log(spreadArrays(...mergeArrays));
