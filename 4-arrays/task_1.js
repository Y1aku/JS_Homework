/*
Создайте массив [1,2,3,4,5,6,7,8,9,10]
Создайте цикл for..of, бегущий по массиву, в котором будет реализована следующая логика:
- если элемент четный - возведет его в квадрат
- если элемент нечетный - возведет его в 3ю степень
*/

const array = [1,2,3,4,5,6,7,8,9,10];

for (let element of array) {

    if (element % 2) {
        element = element ** 3;
        console.log(element);
    } else {
        element = element ** 2;
        console.log(element);
    }
}
