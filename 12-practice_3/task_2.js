// Добавьте в класс `Person` метод `greet`, который возвращает строку приветствия, включающую имя человека.
// Вызовите метод `greet` у экземпляра класса `Person` и выведите результат в консоль.

class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	};

    greet() {
        return `My name is ${this.name}. I'm ${this.age} years old.`
    };
};

const person = new Person('Alex', 32);
console.log(person.greet());