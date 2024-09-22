// Создайте цикл, который выведет в консоль только четные цифры от 10 до 0 (10-8-6-4-2-0)

console.log("Task 1.1" + "\n")

const maxValue = 10;
const minValue = 0;

for (let i = maxValue; i >= minValue; i--) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее

console.log("\n" + "Task 1.2" + "\n")

const smile = ":)";
let sumString = "";

for (let i = 0; i <= 4; i++) {
    sumString += smile;
    console.log(sumString);
}

/*
Создайте скрипт, который удалит все пробелы из строчки:

- Создайте переменную text со значением: Hello! I am a JS student!
- Выведите в консоль text, заменив в ней все пробелы на 1 (единица)
- Реализуйте с помощью метода replaceAll
- Пример в консоли: Hello!1I1am1a1JS1student!
*/

console.log("\n" + "Task 1.3" + "\n")

const text = "Hello! I am a JS student!".replaceAll(" ", "1");
console.log(text);