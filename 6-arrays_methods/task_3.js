/*
Напишите функцию findMissingNumber(arr), которая принимает массив чисел от 1 до N (исключая одно число)
и возвращает пропущенное число. Массив не отсортирован и НЕ может содержать дубликаты.

Решите эту задачу, используя эффективные методы массива.
Пример: const arr = [5,2,7,3,8,1,6] //4
*/

const arr = [5,2,7,3,8,1,6]

function findMissingNumber(array) {

    const sortedArray = array.sort((a, b) => a - b);

    const missedNumber = sortedArray.reduce((counter, number, index) => {

        const nextElement = sortedArray[index + 1];
        
        if (index < array.length - 1) {

            if (nextElement - number !== 1) {
                return number + 1;
            }
        }

        return counter;
    }, 0);
    
    return missedNumber;
}

console.log(findMissingNumber(arr));