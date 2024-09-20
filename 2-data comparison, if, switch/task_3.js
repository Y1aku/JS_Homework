/*
Преобразовать Task 2 таким образом, чтобы значение НАПРИМЕР '2'
(т.е. ЛЮБАЯ строка в которой лежат ТОЛЬКО ЦИФРЫ) пропускалось, преобразовываясь в `number`.
*/

//TODO: РЕШИТЬ ПОЗЖЕ

const minAge = 18;
const maxAge = 60;
let age;

age = 19

switch(true) {

    case typeof age !== 'number': {
        console.log("Incorrect data type");
        break;
    }

    case age < minAge: {
        console.log("You don't have access cause your age is " + age + ". It's less than " + minAge);
        break;
    }

    case age >= minAge && age < maxAge: {
        console.log("Welcome!");
        break;
    }

    case age > maxAge: {
        console.log("Keep calm and look Culture channel");
        break;
    }

    default :{
		console.log("Technical work");
	}
}