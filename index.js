const products = [
  { id: 1, name: "Молоко", price: 25, quantity: 14, category: "Молочні продукти" },
  { id: 2, name: "Хліб", price: 12, quantity: 100, category: "Хлібобулочні вироби" },
  { id: 3, name: "Яйця", price: 20, quantity: 12, category: "Птахоферма" },
  { id: 4, name: "Масло", price: 35, quantity: 31, category: "Молочні продукти" },
  { id: 5, name: "Цукор", price: 15, quantity: 44, category: "Кондитерські вироби" },
  { id: 6, name: "Картопля", price: 10, quantity: 50, category: "Овочі та фрукти" },
  { id: 7, name: "Помідори", price: 30, quantity: 71, category: "Овочі та фрукти" },
  { id: 8, name: "Індичка", price: 40, quantity: 10, category: "М'ясо та м'ясні вироби" },
  { id: 9, name: "Яловичина", price: 25, quantity: 120, category: "М'ясо та м'ясні вироби" },
  { id: 10, name: "Макарони", price: 18, quantity: 140, category: "Макаронні вироби" },
  { id: 11, name: "Сир", price: 50, quantity: 19, category: "Молочні продукти" },
  { id: 12, name: "Печиво", price: 22, quantity: 56, category: "Кондитерські вироби" },
  { id: 13, name: "Куряче філе", price: 40, quantity: 12, category: "М'ясо та м'ясні вироби" },
  { id: 14, name: "Банани", price: 18, quantity: 63, category: "Овочі та фрукти" },
  { id: 15, name: "Свинина", price: 60, quantity: 3, category: "М'ясо та м'ясні вироби" },
  { id: 16, name: "Чай чорний", price: 30, quantity: 5, category: "Чай та кава" },
  { id: 17, name: "Кава", price: 50, quantity: 8, category: "Чай та кава" },
  { id: 18, name: "Сода", price: 8, quantity: 2, category: "Безалкогольні напої" },
  { id: 19, name: "Сметана", price: 25, quantity: 18, category: "Молочні продукти" },
  { id: 20, name: "Яблука", price: 20, quantity: 88, category: "Овочі та фрукти" }
];

// 1) Розрахувати загальну кількість продуктів з категорії "Овочі та фрукти"
const totalQuantityFruitsAndVegetables = products
  .filter(product => product.category === "Овочі та фрукти")
  .reduce((total, product) => total + product.quantity, 0);

// 2) Розрахувати загальну вартість продуктів з категорії "Молочні продукти"
const totalCostDairyProducts = products
  .filter(product => product.category === "Молочні продукти")
  .reduce((total, product) => total + (product.quantity * product.price), 0);

// 3) Повернути новий масив з відсортованими продуктами в порядку зменшення quantity
const sortedProductsByQuantity = [...products].sort((a, b) => b.quantity - a.quantity);

// 4) Знайти найдешевший та найдорожчий продукти
const cheapestProduct = products.reduce((min, product) => (product.price < min.price ? product : min), products[0]);
const mostExpensiveProduct = products.reduce((max, product) => (product.price > max.price ? product : max), products[0]);

// 5) Розрахувати середню ціну продуктів з категорії "М'ясо та м'ясні вироби"
const meatProducts = products.filter(product => product.category === "М'ясо та м'ясні вироби");
const totalCostMeatProducts = meatProducts.reduce((total, product) => total + (product.quantity * product.price), 0);
const averagePriceMeatProducts = totalCostMeatProducts / meatProducts.length;

console.log("Загальна кількість продуктів з категорії 'Овочі та фрукти':", totalQuantityFruitsAndVegetables);
console.log("Загальна вартість продуктів з категорії 'Молочні продукти':", totalCostDairyProducts);
console.log("Масив з відсортованими продуктами в порядку зменшення кількості:", sortedProductsByQuantity);
console.log("Найдешевший продукт:", cheapestProduct);
console.log("Найдорожчий продукт:", mostExpensiveProduct);
console.log("Середня ціна продуктів з категорії 'М'ясо та м'ясні вироби':", averagePriceMeatProducts);
