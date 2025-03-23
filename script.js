"use strict";

let title = prompt("Как называется ваш проект?");
const screens = prompt(
  "Какие типы экранов нужно разработать?",
  "например: Простые, Сложные, Интерактивные"
);
const screenPrice = +prompt("Сколько будет стоить данная работа?");
const adaptive = confirm("Нужен ли адаптив на сайте?");
const service1 = prompt("Какой дополнительный тип услуги нужен?");
const servicePrice1 = +prompt("Сколько это будет стоить?");
const service2 = prompt("Какой дополнительный тип услуги нужен?");
const servicePrice2 = +prompt("Сколько это будет стоить?");
const rollback = 10;

const showTypeOf = function (variable) {
  console.log(variable, typeof variable);
};

const getRollbackMessage = (price) => {
  if (price >= 30000) {
    return "Даем скидку в 10%";
  } else if (price >= 15000 && price < 30000) {
    return "Даем скидку в 5%";
  } else if (price >= 0 && price < 15000) {
    return "Скидка не предусмотрена";
  } else {
    return "Что то пошло не так";
  }
};

const getAllServicePrices = function (servicePrice1, servicePrice2) {
  return servicePrice1 + servicePrice2;
};
const allServicePrices = getAllServicePrices(servicePrice1, servicePrice2);

function getFullPrice(screenPrice, allServicePrices) {
  return screenPrice + allServicePrices;
}
const fullPrice = getFullPrice(screenPrice, allServicePrices);

const getTitle = () => {
  return title.trim()[0].toUpperCase() + title.trim().slice(1).toLowerCase();
};
title = getTitle();

const getServicePercentPrices = (fullPrice) => {
  return fullPrice - (fullPrice * rollback) / 100;
};
const servicePercentPrice = getServicePercentPrices(fullPrice);

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

console.log(screens);
console.log(fullPrice);
console.log(allServicePrices);
console.log(servicePercentPrice);
console.log(getRollbackMessage(fullPrice));
