/*
Создайте функцию, принимающую число n, которая при каждом вызове будет генерировать случайное число `[1 - n]` включительно.

Условие - каждый следующий вызов должен давать новое число (не встречавшееся в прошлых вызовах).

И так пока не переберутся все n чисел. На n + 1 вызов и далее функция должна возвращать 'All numbers were received'. 

Задачу решить через замыкания

Например n = 5, функция выведет 5 чисел 1-5, а после будет выводить сугубо `All numbers were received`.

Рекомендации:

Для генерации числа в границах воспользуйтесь методом –

function getRandomArbitrary(min, max) {
	return Math.random() * (max - min) + min;
}
*/

function getRandomArbitrary(min, max) {
	return Math.random() * (max - min) + min;
};

function uniqueNumbersFormRange(n) {
    const arrayOfNumbers = [];

    return function() {
        if (arrayOfNumbers.length === n) {
            return 'All numbers were received';
        };

        let oneNumber;

        do {
            oneNumber = Math.floor(getRandomArbitrary(1, n + 1));
        } while (arrayOfNumbers.includes(oneNumber));

        arrayOfNumbers.push(oneNumber);

        return oneNumber;
    };
};

const n = 5;
const uniqueNumber = uniqueNumbersFormRange(n);

console.log(uniqueNumber());
console.log(uniqueNumber());
console.log(uniqueNumber());
console.log(uniqueNumber());
console.log(uniqueNumber());
console.log(uniqueNumber());
