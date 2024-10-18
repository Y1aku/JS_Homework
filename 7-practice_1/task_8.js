/*
Необходимо реализовать функцию, которая будет принимать число.
Если это число больше 9, то нужно сложить цифры этого числа.
Если сумма этого числа больше 9, то необходимо повторить сложение цифр нового числа.

Решить через рекурсию.
*/

function getRecursiveSum(number) {
	const sum = [...number.toString()].reduce((a, b) => +a + +b);
	return sum > 9 ? getRecursiveSum(sum) : sum;
}

console.log(getRecursiveSum(156));