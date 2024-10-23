/*
Напишите функцию filterByAge, которая принимает на вход массив объектов и число.
У каждого объекта есть свойство age.
Функция должна возвращать новый массив с объектами, у которых свойство age больше заданного числа.

Дополнительно:
- передавать ключ по которому ищем;
*/

const people = [
    { name: "Alice", age: 25 },
    { name: "Alice", age: 35 },
    { name: "Bob", age: 20 },
    { name: "Charlie", age: 30 }
];

function filterByAge(array, key, value) {

    if (key === "name") {
        return array.find(element => element.name === value);
    } else if (key === "age") {
        return array.filter(element => element.age > value);
    }
	
};

console.log(filterByAge(people, "name", "Charlie"));
