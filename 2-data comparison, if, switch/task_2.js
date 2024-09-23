// Создать переменную "minAge" и присвоить ей значение 18

const minAge = 18;

// Создать переменную "maxAge" и присвоить ей значение 60

const maxAge = 60;

// Создать переменную "age", в которую вы будете вводить возраст при выполнении программы

let age;

// Создать if в котором будете проверять весь код переменной age со следующими условиями:

age = 60

if (typeof age != "number") {
    console.log("Incorrect data type");
} else if (age < minAge) {
    console.log("You don't have access cause your age is " + age + ". It's less than " + minAge);
} else if (age >= minAge && age < maxAge) {
    console.log("Welcome!");
} else if (age > maxAge) {
    console.log("Keep calm and look Culture channel");
} else {
    console.log("Technical work");
}