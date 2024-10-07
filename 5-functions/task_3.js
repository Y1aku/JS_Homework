/*
Напишите рекурсивную функцию, которая принимает на вход число и складывает его цифры.
Если сумма получилась больше 9 - снова сложите цифры.
И так пока, сумма не станет меньше либо равной 9.
После окончания сложений возвращает полученное число.
Например при подаче числа 19 (1+9=10>9, потому 1+0=1) выводится 1
*/

function sumNumbers(number) {
    const newArray = number.toString().split("");
    let sumOfArray = 0;

    for (let i = 0; i < newArray.length; i++) {
        sumOfArray += +newArray[i];
    }

    if (sumOfArray > 9) {
        return sumNumbers(sumOfArray);
    } else {
        return sumOfArray;
    }

}

console.log(sumNumbers(19));