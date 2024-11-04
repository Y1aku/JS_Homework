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

// console.log(qa.getInfo('Hello!'));

/*
2. Changing the context

Создайте объект `anotherQa` с полями `name`, `age`, `salary`, значения в которых будут отличны от объекта qa

Вызовите метод `getInfo` объекта `qa` c контекстом вызова объекта `anotherQa` с помощью метода `bind()`

Вызовите метод getInfo объекта qa c контекстом вызова объекта anotherQa с помощью метода call()

Вызовите метод getInfo объекта qa c контекстом вызова объекта anotherQa с помощью метода apply()
*/

const anotherQa = {
    name: 'Tom',
    age: 25,
    salary: '3000 $'
};

console.log(qa.getInfo.bind(anotherQa)('Hello!'));
console.log(qa.getInfo.call(anotherQa, 'Hello!'));
console.log(qa.getInfo.apply(anotherQa, ['Hello!']));
