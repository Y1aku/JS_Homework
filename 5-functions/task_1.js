/*
Напишите функцию, принимающую на вход любое количество массивов
-  Функция возвращает массив, в котором будут находиться все переданные в функцию в виде чисел
-  Например: mergeArrays([1,2], [3,4], [5,6]) // [1,2,3,4,5,6]
-  Решить с использованием Spread operator
*/

// const mergeArrays = [[1, 2], [3, 4], [5, 6]];

// function spreadArrays(...arrays) {

//     const newArray = [];

//     for (const array of arrays) {
//         newArray.push(...array);
//     }

//     return newArray;
// }

// console.log(spreadArrays(...mergeArrays));


/*
Написать функцию, которая преобразует любое предложение в вот_Такой_Вот_Вид и возвращает его. 
-  Первое слово должно начинаться с буквы в нижнем регистре, у остальных -  верхнем. 
-  Пример: I am super engineer => i_Am_Super_Engineer
*/

const sentence = "I am super engineer";

function changeSentence(input) {
    const newSentence = input.split(" ");
    for (let i = 0; i < newSentence.length; i++) {
        if (i === 0) {
            newSentence[i] = newSentence[i][i].toLowerCase() + newSentence[i].slice(1);
        } else {
            newSentence[i] = newSentence[i][0].toUpperCase() + newSentence[i].slice(1);
        }
    }
    return newSentence.join("_");
}

console.log(changeSentence(sentence));

