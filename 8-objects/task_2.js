/*
1. Напишите функцию addCharacter(character) позволяющую добавить новый объект в массив characters. 
Объект должен иметь поля name (string) и age (number)

2. Напишите функцию getCharacter(name), позволяющую получить объект персонажа по его имени// getCharacter('Fred') => { 'name': 'Fred', 'age': 40 }

3. Напишите функцию getCharactersByAge(minAge), возвращающую массив персонажей НЕ МЛАДШЕ minAge // getCharactersByAge(40) => [{ 'name': 'Fred', 'age': 40 },{ 'name': 'Jack', 'age': 50 }]

4. Напишите функцию updateCharacter(name, newCharacter). (Методом getCharacter(name) получаем ссыклку на нужного персонажа, а потом меняем ему данные)

5. Напишите функцию для удаления персонажа removeCharacter(name) (Реализовать через splice, индекс персонажа искать методом findInxex)
*/

const characters = [
	{ 'name': 'Barney', 'age': 36 },
	{ 'name': 'Fred', 'age': 40 },
	{ 'name': 'Jack', 'age': 50 }
];

