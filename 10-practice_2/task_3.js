/*
Нужно написать функцию, которая будет обновлять определенный объект в массиве объектов.
*/

const movies = [
    { id: 1, title: "Inception", rating: 8.8 },
    { id: 2, title: "The Matrix", rating: 8.7 },
    { id: 3, title: "Interstellar", rating: 8.6 }
];
  
function updateRating(id, newRating) {
	const foundMovie = movies.find((element) => element.id === id);
	foundMovie.rating = newRating;
}
  
updateRating(2, 9);
console.log("Updated Movies:", movies);
