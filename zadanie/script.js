"use strict";

let money    =  prompt('Ваш бюджет на месяц?', ''),
    time     = +prompt('Введите дату в формате YYYY-MM-DD', 'YYYY-MM-DD');

prompt('Введите обязательную статью расходов в этом месяце', '');
prompt('Во сколько обойдется?', '');

let appData  = {
    budget: money,
    timeData: time,
    expenses: {
        money: "time"
    },
    optionalExpenses: {},
    income: [],
    savings: false
};

alert(money/30);