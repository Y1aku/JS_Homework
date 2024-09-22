/*
Преобразовать Task 2 таким образом, чтобы значение НАПРИМЕР '2'
(т.е. ЛЮБАЯ строка в которой лежат ТОЛЬКО ЦИФРЫ) пропускалось, преобразовываясь в `number`.
*/

//TODO: РЕШИТЬ ПОЗЖЕ

const minAge = 18;
const maxAge = 60;
let age;

age = "60"

if (typeof age != "number" && isNaN(age) == false) {
    age = +age;
    console.log(`Your age is ${age}`);
} else if (age < minAge) {
    console.log("You don't have access cause your age is " + age + ". It's less than " + minAge);
} else if (age >= minAge && age < maxAge) {
    console.log("Welcome!");
} else if (age > maxAge) {
    console.log("Keep calm and look Culture channel");
} else {
    console.log("Technical work");
}