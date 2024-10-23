/*
Подсчитать сколько раз определенное значение встречается у свойств разных объектов массива.
*/

const orders = [
    { orderId: 1, status: "shipped" },
    { orderId: 2, status: "pending" },
    { orderId: 3, status: "shipped" },
    { orderId: 4, status: "delivered" }
];

function countStatusOccurrences(status) {
	return orders.reduce((result, element) => (element.status === status ? ++result : result), 0);
};

const shippedCount = countStatusOccurrences("shipped");
console.log("Shipped Orders Count:", shippedCount); // 2
