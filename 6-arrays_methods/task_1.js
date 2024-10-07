// Перед вами массив чисел [7, 8, 2, 30, 85, 95, 77, 94, 37, 31], используя методы массивов сделайте следующее:

const arr = [7, 8, 2, 30, 85, 95, 77, 94, 37, 31];

// 1. forEach - выведите в консоль все числа, делящиеся без остатка на 3
// 30

arr.forEach((element) => {
    if (element % 3 === 0) {
        console.log(element);
    }
});

// 2. map - создайте новый массив, в котором из каждого элемента изначального массива вычли длину изначального массива 
// [-3, -2, -8, 20, 75, 85, 67, 84, 27, 21]

const arrayForMap = arr.map((element, i, initialArr) => element - initialArr.length);

console.log(arrayForMap);

// 3. filter - создайте новый массив, в который войдут лишь значения, которые больше предыдущего
// [8, 30, 85, 95, 94]

const arrayForFilter = arr.filter((element, index) => arr[index] > arr[index - 1]);

console.log(arrayForFilter);

// 4. find - найдите элемент, равный своему индексу 
//2

const elementEqualsIndex = arr.find((element, index) => element === index);

console.log(elementEqualsIndex);

// 5. sort - отсортируйте массив по возрастанию, не изменив изначальный 
// [2, 7, 8, 30, 31, 37, 77, 85, 94, 95]

const arrayForSort = arr.toSorted((a , b) => a - b);

console.log(arrayForSort);

//6. reduce - получите сумму всех чисел массива
// 466

const sum = arr.reduce((accumulator, element) => {
    return accumulator + element;
}, 0);

console.log(sum);

// 7. some - проверьте, есть ли в массиве элементы больше 90
//true

const elementMoreNinety = arr.some((element) => element > 90);

console.log(elementMoreNinety);

// 8. every - проверьте, что все элементы массива двухзначные
//false

const allElementsTwoDigit = arr.every((element) => element.toString().length === 2);

console.log(allElementsTwoDigit);
