/*Написать конвертор валют. Пользователь вводит количество USD, выбирает, в какую валюту хочет перевести 
EUR, UAN или AZN, и получает в ответ соответствующую сумму.*/

let money = +prompt('Какую сумму USD вы хотели бы обменять?', '');
let moneyCurrency = confirm('В какой валюте  вы хотели бы обменять? EUR ');
let moneyCurrencyUAN = confirm('В какой валюте  вы хотели бы обменять? UAN ');
let moneyCurrencyAZN = confirm('В какой валюте  вы хотели бы обменять? AZN  ');
let result;


if (moneyCurrency === true && !moneyCurrencyUAN && !moneyCurrencyAZN ){
    result = money * 0.86;
    console.log(`Сумма обмена валюты по курсу составила ${result} EUR`);
}else if(!moneyCurrency && moneyCurrencyUAN === true && !moneyCurrencyAZN ){
    result = money * 26.29;
    console.log(`Сумма обмена валюты по курсу составила ${result} UAN`);
}else if(!moneyCurrency && !moneyCurrencyUAN && moneyCurrencyAZN === true){
    result = money * 1.68;
    console.log(`Сумма обмена валюты по курсу составила ${result} AZN`);
}

//второй вариант//
/*let amount = prompt('Enter the amount of USD:', 0);
    let currency = prompt('EUR = 1, UAH = 2, AZN = 3', 0);
    switch(currency) {
        case '1':
            console.log(amount*0.89 + 'EUR');
            break;
        case '2':
            console.log(amount*25.90 + 'UAH');
            break;
        case '3':
            console.log(amount*1.69 + 'AZN');
            break;
    }*/

          



