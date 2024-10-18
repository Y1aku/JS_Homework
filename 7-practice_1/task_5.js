/*
Напишите алгоритм, который берет массив и перемещает все нули в конец, 
сохраняя порядок остальных элементов.
*/

// Решение 1

const array = [false, 1, 0, 1, 2, 0, 1, 3, "a"];

function moveZeros(arr) {
    const arrayWithoutZeroes = arr.filter(element => element !== 0);
    const arrayWithZeroes = arr.filter(element => element === 0);
    return [...arrayWithoutZeroes, ...arrayWithZeroes];
}

console.log(moveZeros(array));

// Решение 2