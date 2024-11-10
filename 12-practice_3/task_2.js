// Добавьте в класс `Person` метод `greet`, который возвращает строку приветствия, включающую имя человека.
// Вызовите метод `greet` у экземпляра класса `Person` и выведите результат в консоль.

class Person {
	constructor(name, age) {
		this.name = name; // теперь мы обращаемся к сеттеру
		this.age = age; // теперь мы обращаемся к сеттеру
	};
	
    get name() {
        return this._name;
    };
	
    set name(name) {
		
        if (typeof name !== 'string') {
            throw new Error('Invalid name type');
        }
        
        this._name = name;
    };
	
    get age() {
        return this._age;
    };
	
    set age(age) {
		
        if (typeof age !== 'number') {
            throw new Error('Invalid age type');
        }
		
        this._age = age;
    };
	
    greet() {
        return `My name is ${this.name}. I'm ${this.age} years old.`
    };
};

const person = new Person(123, 32);
person.age = 56;
console.log(person.greet());
