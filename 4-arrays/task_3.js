/*
Создайте массив из чисел [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 2, 4, 6, 8, 10, 1, 3, 5, 7, 9];
- Напишите скрипт, который убирает из массива дубликаты
- При удалении дубликата, длина массива должна уменьшаться
*/

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 2, 4, 6, 8, 10, 1, 3, 5, 7, 9];
const arrayWithoutDublicates = [];

for (let i = 0; i < arr.length; i++) {
    if (arrayWithoutDublicates.includes(arr[i])) {
        continue;
    } else {
        arrayWithoutDublicates.push(arr[i]);
    }
}

console.log(arrayWithoutDublicates);