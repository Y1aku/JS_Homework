/*
Есть массив с ценами товаров в чеке.
В консоль нужно вывести сумму всех цен и среднюю цену товара.

Пример сообщения в консоли: «Итого: $8495, средняя цена товара: $700»
*/

const prices = [64, 7556, 345, 7556, 345, 7556, 345, 7556, 433, 345, 756, 123, 942, 3112, 421, 9341, 1212, 8, 43, 41, 345, 341, 21, 321, 123];

function getTotalPrice(arr) {
	return arr.reduce((acc, element) => acc + element, 0);
}

function getAveragePrice(arr) {
	return getTotalPrice(arr) / arr.length;
}

console.log(`Итого: $${getTotalPrice(prices)}, средняя цена товара: $${getAveragePrice(prices)}`);