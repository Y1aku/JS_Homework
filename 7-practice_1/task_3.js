/*
Напишите функцию countOccurrences, которая принимает на вход массив и значение, 
и возвращает количество раз, когда значение встречается в массиве.
*/

const array = [1, 2, 2, 3, 2, 4, 5];

function countOccurrences(arr, num) {
	return arr.filter((element) => element === num).length;
}

console.log(countOccurrences(array, 4)); // 3