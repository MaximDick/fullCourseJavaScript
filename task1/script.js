'use strict';

//while
// let i = 0;
// while (i < 2) {
//     let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt ("Во сколько обойдется?", "");
//
//     if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {
//
//         console.log ("done");
//
//         appData.expenses[a] = b;
//     } else {
//         console.log ("bad result");
//         i--;
//     }
//     i++;
// }

// //do-while
// let i = 0;
// do {
//     let str1 = prompt('Введите обязательную статью расходов на месяц', ''),
//         str2 = prompt('Во сколько обойдется?', '');
//
//     if (typeof (str1) === 'string' && typeof (str1) != null && typeof (str2) != null
//         && str1 !== '' && str2 !== '' && str1.length < 50) {
//         console.log('done');
//         appData.expenses[str1] = str2;
//     } else {
//         console.log('bad result');
//         i--;
//     };
//     i++
// } while ( i < 2);

let money, time;
function start() {
    money = +prompt('Ваш бюджет на месяц?',"");
    time = prompt('Введите дату в формате YYYY-MM-DD','');

    while (isNaN(money) || money == '' || money == null) {
        money = +prompt('Ваш бюджет на месяц?', '');
    }
}

start();


let appData = {
    budget : money,
    timeDate : time,
    expenses : {},
    optionalExpenses : {},
    income : [],
    savings : true,
};

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let str1 = prompt('Введите обязательную статью расходов на месяц', ''),
            str2 = prompt('Во сколько обойдется?', '');


        if (typeof (str1) === 'string' && typeof (str1) != null && typeof (str2) != null
            && str1 !== '' && str2 !== '' && str1.length < 50) {
            console.log('done');
            appData.expenses[str1] = str2;
        } else {
            console.log('bad result');
            i--;
        };
    }
}

chooseExpenses();

appData.moneyPerDay = (appData.budget / 30).toFixed();
alert('ежедневный бюджет ' +  appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log(' Минимальный уровень достатка ' + appData.moneyPerDay);
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay <  2000) {
    console.log('Средний уровень достатка ' + appData.moneyPerDay);
} else if (appData.moneyPerDay > 2000) {
    console.log(' Высокий уровень достатка ' + appData.moneyPerDay);
} else
    console.log('Исключительная ситуация ' + appData.moneyPerDay);

function checkSavings() {
    if (appData.savings === true) {
        let save = +prompt('Какова сумма накоплений?'),
            percent = +prompt('Под какой процент?');

        appData.monthIncome = save / 100 / 12 * percent;
        console.log('Доход в месяц с вашего депозита: ' + appData.monthIncome);
    }
}

checkSavings();