/*
Создать программу, которая будет принимать на вход СЛОВО (создать переменную со словом)
и выводить в консоль количество гласных и согласных букв в этом слове.

Ответ должен выводиться шаблонным литералом вида word contains x vowels and y consonants
*/

const word = "Пенал";
const countOfLetters = word.length;
const vowelsKit = "аеёиоуыэюяАЕЁИОУЫЭЮЯ";
const countOfVowelsInKit = vowelsKit.length;

let countOfVowels = 0;
let countOfConsonants = 0;

for (let i = 0; i < countOfLetters; i++) {

    let isVowel = false;

    for (let j = 0; j < countOfVowelsInKit; j++) {
        if (word[i].includes(vowelsKit[j])) {
            countOfVowels = ++countOfVowels;
            // console.log("Кол-во гласных - " + countOfVowels);
            // console.log(`${word[i]} - это гласная`);
            isVowel = true;
            break;
        }
    }

    if (!isVowel) {
        countOfConsonants = ++countOfConsonants;
        // console.log("Кол-во согласных - " + countOfConsonants);
        // console.log(`${word[i]} - это согласная`);
    }
}

console.log(`word contains ${countOfVowels} vowels and ${countOfConsonants} consonants`)
