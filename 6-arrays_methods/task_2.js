/*
Напишите функцию, которая принимает на вход массив слов
и возвращает отсортированный массив по следующему критерию: количество гласных букв.

Массив должен быть отсортирован по возрастанию количества гласных букв в слове.
*/

const words = ["umbrella", "apple", "ocean", "independent", "education", "elephant", "island", "universe", "environment", "queue"];
const vowelsKit = "aeiouyAEIOUY";

function sortArray(array) {

    const arrayOfwordsWithCounters = array.map(word => {

        const vowelsCount = word.split("").reduce((count, letter) => {

            if (vowelsKit.includes(letter)) {
                ++count;
            }

            return count;

        }, 0);

        return [word, vowelsCount];
    });

    arrayOfwordsWithCounters.sort((a, b) => a[1] - b[1]);

    return arrayOfwordsWithCounters.map(word => word[0]);
}

console.log(sortArray(words));
