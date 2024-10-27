/*
Есть массив компаний со своими департаментами. Нужно написать:

- функцию, которая будет возвращать общее количество сотрудников;
- функцию, которая будет принимать 1 аргумент (id отдела или название отдела)
и возвращать название предприятие, к которому относится данный отдел;
*/

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
  
function getTotalEmployeesCount(arr) {
    return arr.reduce((total, enterprise) => {
        return total + enterprise.departments.reduce((result, department) => department.employees_count + result, 0);
    }, 0);
};
  
console.log(getTotalEmployeesCount(enterprises));
