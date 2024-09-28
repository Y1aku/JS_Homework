/*
У вас есть массив названий пицц вашего конкурента.
Создайте скрипт с циклом, который будет проверять ваш набор названий пицц (массив)
и выводить в консоль только те, которых нет у конкурента (тоже массив).
Если все ваши пиццы есть у конкурента - вывести в консоль null.

Скрипт не должен зависеть от регистра, в котором указаны названия пицц у вас и конкурента.
Пиццы конкурента: const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
*/

const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
const myPizzas = ['BytePizza', 'SyntaxError', 'BufferPizza', 'diablo', 'ReactPizza'];
// const myPizzas = ['diablo'];
const myUniquePizzas = [];

for (let i = 0; i < competitorPizzas.length; i++) {
    competitorPizzas.splice(competitorPizzas.indexOf(competitorPizzas[i]), 1, competitorPizzas[i].toLowerCase());
}

for (let i = 0; i < myPizzas.length; i++) {

    const myPizza = myPizzas[i].toLowerCase();

    if (!competitorPizzas.includes(myPizza)) {
        myUniquePizzas.push(myPizza);
    }
}

if (myUniquePizzas.length === 0) {
    console.log(null);
} else {
    console.log(myUniquePizzas);
}