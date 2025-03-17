const title = "Расчет стоимости выполнения проекта";
const screens = "Простые, Сложные, Интерактивные";
const screenPrice = 50000;
const rollback = Math.floor(Math.random() * 100) + 1;
const fullPrice = 150000;
const adaptive = false;

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);
console.log(screens.length);
console.log("Стоимость верстки экранов " + screenPrice + " рублей");
console.log("Стоимость разработки сайта " + fullPrice + " рублей");
console.log(screens.toLowerCase().split(", "));
console.log(
  "Процент отката посреднику за работу " + fullPrice * (rollback / 100)
);
