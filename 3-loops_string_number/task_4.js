/*
Написать программу, которая видоизменяет принимаемое слово (переменная со словом) шифром ЦЕЗАРЯ (посмотреть в википедии) со сдвигом на 1 в любую из сторон.
Направление шифрования задается переменной offset, которая может быть +1 и -1.
Например let str = 'AbC'; let offset = -1, result = 'ZaB'; Например let str = 'ZzZ'; let offset = 1, result = 'AaA';
*/

const acceptedWord = "АЯая-п";
const offset = -1;
let outputWord = "";

const lettersKit = "абвгдеёжзийклмнопрстуфхцчшщъыьэюяАБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ";

for (let i = 0; i < acceptedWord.length; i++) {

    let indexOfLettersKit = 0;

    if (lettersKit.includes(acceptedWord.charAt(i))) {
        indexOfLettersKit = lettersKit.indexOf(acceptedWord.charAt(i));

        if (indexOfLettersKit === 33 && offset === -1) {
            indexOfLettersKit = 65;
        } else if (indexOfLettersKit === 65 && offset === 1) {
            indexOfLettersKit = 33;
        } else if (indexOfLettersKit === 0 && offset === -1) {
            indexOfLettersKit = 32;
        } else if (indexOfLettersKit === 32 && offset === 1) {
            indexOfLettersKit = 0;
        } else {
            indexOfLettersKit = indexOfLettersKit + offset;
        }
        outputWord += lettersKit[indexOfLettersKit];

    } else {
        outputWord += acceptedWord.charAt(i);
    }
}

console.log("\n" + outputWord);
