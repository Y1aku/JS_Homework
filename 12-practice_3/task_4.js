// Добавьте в класс `Person` статический метод `compareAges`, который принимает два экземпляра `Person`
// и возвращает имя того, кто старше.
// Используйте этот статический метод, чтобы сравнить возраст двух экземпляров `Person` и вывести результат в консоль.

class Person {
	
	static compareAges(person1, person2) {
		if (!(person1 instanceof Person) || !(person2 instanceof Person)) {
			throw new Error("Persons aren't instance of Person");
		};
		
		if (person1.age > person2.age) {
			return `${person1.name} is older than ${person2.name}`
		} else if (person2.age > person1.age) {
			return `${person2.name} is older than ${person1.name}`
		} else {
			return `${person2.name} and ${person1.name} have the same age`
		};
	};
	
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

const person1 = new Person('David', 27);
const person2 = new Person('Mark', 19);

console.log(Person.compareAges(person1, person2));
