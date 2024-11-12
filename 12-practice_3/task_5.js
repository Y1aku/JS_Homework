/*
Добавить к классу `Person` поле, которое будет являться массивом
(массивом проектов, которые будут созданы объектом из класса `Person`).

Т.е. если мы в конструктор передали хотя бы один проект, то он должен отобразиться у объекта.

Из вне к проектам можно обращаться только через `getProjects` + надо реализовать сеттер для работы с проектами.
*/

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
	
	#projects = []; // делаем поле приватным
	
	constructor(name, age, projects = []) {
		this.name = name;
		this.age = age;
		this.setProjects(projects);
	};
	
	getProjects() {
		return this.#projects;
	};
	
	setProjects(projects = []) {
		if (!Array.isArray(projects) || projects.some((element) => typeof element !== 'string')) {
			throw new Error('Invalid type of projects');
		}
		
		this.#projects.push(...projects);
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

const person1 = new Person("Alice", 30);
person1.setProjects(["Project A", "Project B", "Project C"]);
console.log(person1.getProjects());
console.log(person1.greet());