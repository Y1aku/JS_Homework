/*
Написать функцию, которая принимает на вход слово и проверяет, является ли это слово палиндромом
*/

const word = "Lol";
// const word = "Text";

function checkPalindrome(input) {
    const arrayOfInput = input.toLowerCase().split("");
    const arrayToCompare = [];

    for (let i = arrayOfInput.length - 1; i >= 0; i--) {
        arrayToCompare.push(arrayOfInput[i]);
    }

    if (arrayOfInput.join("") === arrayToCompare.join("")) {
        return `word ${word} is palindrome`
    } else {
        return `word ${word} is not palindrome`
    }
}

console.log(checkPalindrome(word));

/*
Написать функцию, которая принимает предложение (слова разделенные только пробелами) в качестве параметра
и возвращает слово с наибольшим количеством букв. Если таких слов несколько - возвращает их все.
*/

const sentence = "I am super engineer";
// const sentence = "I am super puper boy";

function findMaxLength(input) {
    const newArray = input.split(" ");
    let wordMaxLength = 0;
    let arrayOfMaxLengthWords = [];

    for (const element of newArray) {
        if (element.length > wordMaxLength) {
            wordMaxLength = element.length;
            arrayOfMaxLengthWords = [element];
        } else if (element.length === wordMaxLength) {
            arrayOfMaxLengthWords.push(element);
        }
    }
    return arrayOfMaxLengthWords;
}

console.log(findMaxLength(sentence));