/*
Создайте массив [1,2,3,4,5,6,7,8,9,10]
Создайте цикл for..of, бегущий по массиву, в котором будет реализована следующая логика:
- если элемент четный - возведет его в квадрат
- если элемент нечетный - возведет его в 3ю степень
*/

const arrayOfTask1 = [1,2,3,4,5,6,7,8,9,10];

for (let element of arrayOfTask1) {

    if (element % 2) {
        element = element ** 3;
        console.log(element);
    } else {
        element = element ** 2;
        console.log(element);
    }
}

/*
Методы массивов
- Создайте массив [1,2,3,4,5]
- Добавьте в конец массива число 6 соответствующим методом
- Добавьте в начало массива число 0 соответствующим методом
- Удалите элемент с индексом 2 из массива соответствующим методом
- Удалите последний элемент из массива соответствующим методом
- В результате вы должны получить [0, 1, 3, 4, 5]
*/

const arrayOfTask2 = [1,2,3,4,5];
arrayOfTask2.push(6);
arrayOfTask2.unshift(0);
arrayOfTask2.splice(2, 1);
arrayOfTask2.pop();
console.log(arrayOfTask2);

/*
Создайте массив из 5 любых чисел (придумать числа самим)
- Через деструктуризацию получите в новые переменные первый, второй и остальные элементы массива
- Пример: [1,2,3,4,5] => first === 1; second === 2, rest === [3,4,5]
*/

const arrayOfTask3 = [17, 24, 0, 2, 96];

const [first, second, ...rest] = arrayOfTask3;
console.log(first, second, rest);

/*
Создайте массив с числами [1,2,3,4,5]
- Создайте еще 1 массив с числами [6, 7, 8, 9, 10]
- Создайте переменную mergedArray, который будет хранить значения из массивов 1 и 2
- Используйте спред оператор
*/

const arrayOfTask4 = [1,2,3,4,5];
const arrayOfTask4_2 = [6,7,8,9,10];
let mergedArray = [...arrayOfTask4, ...arrayOfTask4_2];;
console.log(mergedArray);