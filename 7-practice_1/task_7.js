/*
Напишите функцию, которая принимает массив чисел и возвращает новый массив, 
где в каждом числе переставлены цифры так, 
чтобы число получилось максимально возможным, например: 1234 => 4321
*/

// Решение 1

// const arr = [123, 542, 968, 352, 1, 308];

// function getGreatestTransformedNumbers(arr) {
// 	return arr.map((element, index, array) => createMaxNumber(element));
// }

// function createMaxNumber(number) {
// 	return +[...number.toString()].sort((a, b) => +b - +a).join("");
// }

// console.log(getGreatestTransformedNumbers(arr));

// Решение 2

const arr = [123, 542, 968, 352, 1, 308];

function getGreatestTransformedNumbers(arr) {
	return arr.map(createMaxNumber);
}

function createMaxNumber(number) {
	return +[...number.toString()].sort((a, b) => +b - +a).join("");
}

console.log(getGreatestTransformedNumbers(arr));
