/*
Есть массив имен `["Anatoly", "Maria", "Pavel", "Svetlana"]`,
массив зарплат `[1000, 2000, 500, 0]`
и массив профессий `["AQA", "Developer", "DevOps", "QA"]`.

Нужно написать функцию, которая будет принимать на вход 3 массива и возвращать объект массивов следующего вида:

[
	{
		name: "Anatoly",
		salary: 1000,
		profession: "AQA"
	},
	{
		name: "Maria",
		salary: 2000,
		profession: "Developer"
	},
	{
		name: "Pavel",
		salary: 500,
		profession: "DevOps"
	},
	{
		name: "Svetlana",
		salary: 0,
		profession: "QA"
	}
]
*/

// Мое решение

// const arrayOfNames = ["Anatoly", "Maria", "Pavel", "Svetlana"];
// const arrayOfSalaries = [1000, 2000, 500, 0];
// const arrayOfProfessions = ["AQA", "Developer", "DevOps", "QA"];

// function getArrayOfObjects(arr1, arr2, arr3) {
//     // Создание массива
//     const newArray = [];

//     // Условие, при котором проверяеся одинаковая длина всех массивов

//     if (arr1.length === arr2.length && arr2.length === arr3.length) {
        
//         // Создание цикла
//         for (let i = 0; i < arr1.length; i++) {

//             // Создание объекта
//             const newObject = new Object();

//             // Создание ключей и Добавление значений к ключам
//             newObject.name = arr1[i];
//             newObject.salary = arr2[i];
//             newObject.profession = arr3[i];

//             // Добавление объекта к массиву
//             newArray.push(newObject);
//         }
//     } else {
//         console.log("Ошибка: разное кол-во элементов в массивах");
//     }

//     // Вывод
// 	return newArray;
// };

// console.log(getArrayOfObjects(arrayOfNames, arrayOfSalaries, arrayOfProfessions));

// Решение 1 с урока

const arrayOfNames = ["Anatoly", "Maria", "Pavel", "Svetlana"];
const arrayOfSalaries = [1000, 2000, 500, 0];
const arrayOfProfessions = ["AQA", "Developer", "DevOps", "QA"];

function getArrayOfObjects(names, salaries, professions) {
	return names.map((name, index) => ({
		name,
		salary: salaries[index],
		profession: professions[index]
	}));
}

console.log(getArrayOfObjects(arrayOfNames, arrayOfSalaries, arrayOfProfessions));

// Решение 2 с урока

