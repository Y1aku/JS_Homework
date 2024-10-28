/*
Напишите функцию filterByAge, которая принимает на вход массив объектов и число.
У каждого объекта есть свойство age.
Функция должна возвращать новый массив с объектами, у которых свойство age больше заданного числа.

Дополнительно:
- передавать ключ по которому ищем полное соответствие;
*/

const people = [
    { name: "Alice", age: 25 },
    { name: "Alice", age: 35 },
    { name: "Bob", age: 20 },
    { name: "Charlie", age: 30 }
];

function filterBy(array, key, value) {
    return array.filter( element => element[key] === value);
};

console.log(filterBy(people, "name", "Alice"));
