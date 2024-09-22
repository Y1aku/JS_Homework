/*
Вам нужно вывести в консоль числа от 1 до 100:

- Если число делится без остатка на 3, то выведете в консоль “число - делится на 3”.
- Если число делится на 5 без остатка, то то выведете в консоль “число - делится на 5”.
- Если число делится и на 3 и на 5 без остатка, то то выведете в консоль “число - делится и на 3 на 5”.
- Число 15 делится без остатка на 3 и на 5 -- пример сообщения в консоли.
*/

const maxValue = 100;
const minValue = 1;

for (let i = minValue; i <= maxValue; i++) {
    // console.log("i равно - "+ i);
    let divideIntoThree = (i / 3).toString();
    // console.log("i / 3 = " + divideIntoThree);
    let divisibleByThree = !divideIntoThree.includes('.');
    // console.log("i делится на 3 - " + divisibleByThree);
    let divideIntoFive = (i / 5).toString();
    // console.log("i / 5 = " + divideIntoFive);
    let divisibleByFive = !divideIntoFive.includes('.');
    // console.log("i делится на 5 - " + divisibleByFive);

    if (divisibleByThree && divisibleByFive) {
        console.log(`Число ${i} делится без остатка и на 3, и на 5.`);
    } else if (divisibleByThree) {
        console.log(`Число ${i} делится без остатка на 3.`);
    } else if (divisibleByFive) {
        console.log(`Число ${i} делится без остатка на 5.`);
    } else {
        console.log(i);
    }
}