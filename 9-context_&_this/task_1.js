/*
1. Context

Создайте объект qa с полями name, age, salary и методом getInfo(greetingsWord), который будет возвращать строку вида:

${greetingsWord}, my name is ${name}, i'm ${age} and my salary is ${salary}

Значения в строке должны ссылаться на контекст ЭТОГО ОБЪЕКТА, без подмен.
*/

const qa = {
    name: 'Alex',
    age: 20,
    salary:'1200 $',
    getInfo: function(greetingsWord) {
        return `${greetingsWord}, my name is ${this.name}, i'm ${this.age} and my salary is ${this.salary}`;
    }
};

console.log(qa.getInfo('Hello!'));

