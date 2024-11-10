// Создать новый класс, как `Person`, который будет иметь дополнительное поле `personId`
// и метод `study` для вывода информации.

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

class Student extends Person {
	constructor(name, age, studentId) {
		super(name, age);
		this.studentId = studentId;
	};
	
	study() {
		return `${this.name} is studing`;
	};
};

const student = new Student('Tom', 18, 'S001');
console.log(student.study());
