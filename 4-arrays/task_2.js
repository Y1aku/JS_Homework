/*
У вас есть массив названий пицц вашего конкурента.
Создайте скрипт с циклом, который будет проверять ваш набор названий пицц (массив)
и выводить в консоль только те, которых нет у конкурента (тоже массив).
Если все ваши пиццы есть у конкурента - вывести в консоль null.

Скрипт не должен зависеть от регистра, в котором указаны названия пицц у вас и конкурента.
Пиццы конкурента: const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
*/

const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
const myPizza = ['BytePizza', 'SyntaxError', 'BufferPizza', 'Diablo', 'ReactPizza'];
const samePizzas = [];

for (const pizza of competitorPizzas) {
    if (myPizza.includes(pizza)) {
        samePizzas.push(pizza);
    }
}

if (samePizzas.length === 0) {
    console.log(null);
} else {
    console.log(samePizzas);
}