/*
Имеется объект const character = { 'name': 'Barney', 'age': 36, 'gender': 'male', 'isQa': true }
*/

const character = { 'name': 'Barney', 'age': 36, 'gender': 'male', 'isQa': true }

// 1. Создать массив из ключей объекта character и вывести в консоль те, где 4 буквы //name, isQa

const keysOfObject = Object.keys(character).filter( element => element.length === 4);
console.log(keysOfObject);

// 2. Создать массив из значений объекта character и вывести в консоль те, где тип данных строка //'Barney', 'male'

const valuesOfObject = Object.values(character).filter( element => typeof element === 'string');
console.log(valuesOfObject);

// 3. Создать массив из ключей и значений объекта character, перебрать массив циклом for.
// На каждой итерации вывести пары ключ-значнение в виде `key = ${key}, value = ${value}`

const entriesOfObject = Object.entries(character)

for (let i = 0; i < entriesOfObject.length; i++) {
    console.log(`key = ${entriesOfObject[i][0]}, value = ${entriesOfObject[i][1]}`);
};

// 4. Проверить, есть ли в объекте ключ salary, результат вывести в консоль
// (Реализовать 2мя способами: через оператор in и Object.hasOwn())

console.log('salary' in character);
console.log(character.hasOwnProperty('salary'));
