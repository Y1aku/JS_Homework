/*
Напишите функцию countOccurrences, которая принимает на вход массив и значение, 
и возвращает количество раз, когда значение встречается в массиве.
*/

// const array = [1, 2, 2, 3, 2, 4, 5];

// function countOccurrences(arr, num) {
// 	return arr.filter((element) => element === num).length;
// }

// console.log(countOccurrences(array, 4)); // 3

// Решение через reduce

const array = [1, 2, 2, 3, 2, 4, 5];

function countOccurrences(arr, num) {
	return arr.reduce((result, element) => (element === num ? ++result : result), 0);
}

console.log(countOccurrences(array, 2)); // 3