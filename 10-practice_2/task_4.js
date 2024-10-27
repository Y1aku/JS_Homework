/*
У вас есть массив в котором лежат объекты – пиццы, где в ключах ингредиент, в значении – название.
Но у вас поменялись рецепты!

Нужно вернуть новый массив, заменив в каждой пицце `cheese: parmesan`, на `cheese: gauda`.

Остальные поля оставить без изменений.
*/

const pizzas = [
    {
      greens: "rukkola",
      vegetables: "tomato",
      dough: "thin",
      meat: "hamon",
      cheese: "parmesan",
    },
    {
      greens: "rukkola",
      vegetables: "pepper",
      dough: "thin",
      meat: "bacon",
      cheese: "parmesan",
    },
    {
      greens: "onion",
      vegetables: "tomato",
      dough: "thick",
      meat: "peperoni",
      cheese: "parmesan",
    },
];
  
function changeCheese(cheese) {
    pizzas.forEach((element) => element.cheese = cheese);
};
  
changeCheese("gauda");
console.log(pizzas);
