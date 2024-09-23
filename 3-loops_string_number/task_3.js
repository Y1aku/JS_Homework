/*
Создать программу, которая будет принимать на вход СЛОВО (создать переменную со словом)
и выводить в консоль количество гласных и согласных букв в этом слове.

Ответ должен выводиться шаблонным литералом вида word contains x vowels and y consonants
*/

const word = "Летний день";
const countOfLetters = word.length;
const vowelsKit = "аеёиоуыэюяАЕЁИОУЫЭЮЯ";
const countOfVowelsInKit = vowelsKit.length;
const consonantsKit = "бвгджзйклмнпрстфхцчшщБВГДЖЗЙКЛМНПРСТФХЦЧШЩ";
const countOfConsonantsInKit = consonantsKit.length;

let countOfVowels = 0;
let countOfConsonants = 0;

for (let i = 0; i < countOfLetters; i++) {

    for (let j = 0; j < countOfConsonantsInKit; j++) {
        if (word[i].includes(vowelsKit[j])) {
            countOfVowels = ++countOfVowels;
            break;
        } else if (word[i].includes(consonantsKit[j])) {
            countOfConsonants = ++countOfConsonants;
            break;
        }
    }

}

console.log(`word contains ${countOfVowels} vowels and ${countOfConsonants} consonants`);
