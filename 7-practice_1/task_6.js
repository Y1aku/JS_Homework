/*
Напишите функцию, которая принимает на вход массив целых чисел 
и возвращает отсортированный массив по следующему критерию: 

- количество цифр в числе

Массив должен сортироваться по возрастанию количества цифр в числе.
*/

const arr = [3, 123, 4565565, 1, 241234124124, 12, 5656, 2];

function getAmountOfNumbers(number) {
	return number.toString().length;
}

function sortByNumbers(array) {
	return array.sort((a, b) => getAmountOfNumbers(a) - getAmountOfNumbers(b));
}

console.log(sortByNumbers(arr));
