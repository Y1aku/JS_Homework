//Есть массив компаний со своими департаментами. Нужно написать:

// ЗАДАЧА 1
// - функцию, которая будет возвращать общее количество сотрудников;

const enterprises = [
    {
      id: 1,
      name: "Предприятие 1",
      departments: [
        {
          id: 2,
          name: "Отдел тестирования",
          employees_count: 10,
        },
        {
          id: 3,
          name: "Отдел маркетинга",
          employees_count: 20,
        },
        {
          id: 4,
          name: "Администрация",
          employees_count: 15,
        },
      ],
    },
    {
      id: 5,
      name: "Предприятие 2",
      departments: [
        {
          id: 6,
          name: "Отдел разработки",
          employees_count: 50,
        },
        {
          id: 7,
          name: "Отдел маркетинга",
          employees_count: 20,
        },
        {
          id: 8,
          name: "Отдел охраны труда",
          employees_count: 5,
        },
      ],
    },
    {
      id: 9,
      name: "Предприятие 3",
      departments: [
        {
          id: 10,
          name: "Отдел аналитики",
          employees_count: 0,
        },
      ],
    },
];
  
// function getTotalEmployeesCount(arr) {
//     return arr.reduce((total, enterprise) => {
//         return total + enterprise.departments.reduce((result, department) => department.employees_count + result, 0);
//     }, 0);
// };
  
// console.log(getTotalEmployeesCount(enterprises));

// ЗАДАЧА 2
// - функцию, которая будет принимать 1 аргумент (id отдела или название отдела)
// и возвращать предприятие, к которому относится данный отдел;

// function getEnterprise(idOrName) {
// 	const foundEnterprise = enterprises.find((enterpise) => {
// 		return enterpise.departments.find((department) => {
// 			return department.id === idOrName || department.name === idOrName;
// 		});
// 	});
// 	return foundEnterprise;
// };

// console.log(getEnterprise(10));

// ЗАДАЧА 3
// Написать функцию, которая будет добавлять предприятие.
// В качестве аргумента должно приниматься название предприятия.
// Каждый id на любом уровне вложенности должен быть уникальным.

function getNewId(arr = enterprises) {
	const ids = [];
	arr.forEach(enterprise => {
		ids.push(enterprise.id);
		enterprise.departments.forEach(department => {
			ids.push(department.id);
		});
	});
	const maxId = Math.max(...ids);
	return maxId + 1;
};

console.log(getNewId());

function addEnterprise(name) {
	enterprises.push({
		id: getNewId(),
		name,
		departments: []
	});
};

addEnterprise('Рога и Копыта');
console.log(enterprises);
