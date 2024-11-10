// Создать класс Person
// Добавить конструктор, принимающий в качестве параметров имя и возраст и устанавливающий их в качестве свойств класса.
// Создать экземпляр класса Person и вывести его в консоль

class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	};
};

const person = new Person('Alex', 36);
console.log(person);