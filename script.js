"use strict";

const title = prompt("Как называется ваш проект?");
console.log(title);

const screens = prompt(
  "Какие типы экранов нужно разработать?",
  "например: Простые, Сложные, Интерактивные"
);
console.log(screens);

const screenPrice = +prompt("Сколько будет стоить данная работа?");
const rollback = 20;
const adaptive = confirm("Нужен ли адаптив на сайте?");
console.log(adaptive);

const service1 = prompt("Какой дополнительный тип услуги нужен?");
const servicePrice1 = +prompt("Сколько это будет стоить?");
console.log(`Стоимость ${service1} - ${servicePrice1}`);

const service2 = prompt("Какой дополнительный тип услуги нужен?");
const servicePrice2 = +prompt("Сколько это будет стоить?");
console.log(`Стоимость ${service2} - ${servicePrice2}`);

const fullPrice = screenPrice + servicePrice1 + servicePrice2;

const servicePercentPrice = Math.ceil(fullPrice - fullPrice * (rollback / 100));
console.log(servicePercentPrice);

if (fullPrice >= 30000) {
  console.log("Даем скидку в 10%");
} else if (fullPrice >= 15000) {
  console.log("Даем скидку в 5%");
} else if (fullPrice < 15000 && fullPrice > 0) {
  console.log("Скидка не предусмотрена");
} else {
  console.log("Что то пошло не так");
}

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
