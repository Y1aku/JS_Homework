const characters = [
	{ 'name': 'Barney', 'age': 36 },
	{ 'name': 'Fred', 'age': 40 },
	{ 'name': 'Jack', 'age': 50 }
];

// 1. Напишите функцию addCharacter(character) позволяющую добавить новый объект в массив characters. 
// Объект должен иметь поля name (string) и age (number)

function addCharacter(name, age) {
	const newObject = {};
	newObject.name = name;
	newObject.age = age;
	return characters.push(newObject);
};

addCharacter('Frank', 52);

console.log(characters);

// 2. Напишите функцию getCharacter(name), позволяющую получить объект персонажа по его имени
// getCharacter('Fred') => { 'name': 'Fred', 'age': 40 }

function getCharacter(name) {
	return characters.find( element => element.name === name );
};

console.log(getCharacter('Frank'));

// 3. Напишите функцию getCharactersByAge(minAge), возвращающую массив персонажей НЕ МЛАДШЕ minAge
// getCharactersByAge(40) => [{ 'name': 'Fred', 'age': 40 },{ 'name': 'Jack', 'age': 50 }]

function getCharactersByAge(minAge) {
	return characters.filter( element => element.age > minAge );
};

console.log(getCharactersByAge(36));

// 4. Напишите функцию updateCharacter(name, newCharacter).
// Методом getCharacter(name) получаем ссыклку на нужного персонажа, а потом меняем ему данные

function updateCharacter(name, newCharacter) {
	const foundObject = characters.find( element => element.name === name);
	foundObject.name = newCharacter.name;
	foundObject.age = newCharacter.age;
	return characters;
};

console.log(updateCharacter('Fred', {name: 'Mark', age: 18}));

// 5. Напишите функцию для удаления персонажа removeCharacter(name)
// Реализовать через splice, индекс персонажа искать методом findInxex

function removeCharacter(name) {
	characters.splice(characters.findIndex( element => element.name === name), 1);
	return characters;
};

console.log(removeCharacter('Frank'));
