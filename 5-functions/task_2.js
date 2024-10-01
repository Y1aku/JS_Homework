/*
Написать функцию, которая принимает на вход слово и проверяет, является ли это слово палиндромом
*/

// const word = "Lol";
const word = "Text";

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

*/