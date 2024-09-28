/*
Создайте массив из чисел [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 2, 4, 6, 8, 10, 1, 3, 5, 7, 9];
- Напишите скрипт, который убирает из массива дубликаты
- При удалении дубликата, длина массива должна уменьшаться
*/

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 2, 4, 6, 8, 10, 1, 3, 5, 7, 9];

for (let i = arr.length - 1; i >= 0; i--) {

    let countOfIndex = 0;

    for (let j = 0; j < arr.length; j++) {

        if (arr[i] === arr[j]) {
            countOfIndex++;
            // console.log(arr[i], arr[j], countOfIndex);
        } /* else {
            console.log(arr[i], arr[j], countOfIndex);
        } */

        if (countOfIndex >= 2) {
            arr.splice(i, 1);
            // console.log(arr);
        }
    }
}

console.log(arr);