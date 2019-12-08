'use strict';

let money = prompt('Ваш бюджет на месяц?',"");
let time = prompt('Введите дату в формате YYYY-MM-DD','');

let appData = {
    budget : money,
    timeDate : time,
    expenses : {},
    optionalExpenses : {},
    income : [],
    savings : false,
};

let questions1 = prompt('Введите обязательную статью расходов на месяц', '');
let questions2 = prompt('Во сколько обойдется?', '');
let questions3 = prompt('Введите обязательную статью расходов на месяц', '');
let questions4 = prompt('Во сколько обойдется?', '');

appData.expenses[questions1] = questions2;
appData.expenses[questions3] = questions4;

let price1day = appData.budget / 30;
alert('price1day ' + price1day);
