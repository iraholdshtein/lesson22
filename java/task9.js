//*Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой: от 200 до 300 – скидка//
 //будет 3%,   от 300  до 500 – 5%, от 500 и выше – 7%. *//


let sumPurchase = prompt('Enter your purchase amount USD, please', '');
let discount;

 if (sumPurchase => 200 && sumPurchase <= 300){
        discount = sumPurchase * 3 / 100;
        console.log(`Discount amount is ${discount} USD`);
    }else if (sumPurchase > 300 && sumPurchase <= 500){
        discount = sumPurchase * 5 / 100;
        console.log(discount);
    }else if(sumPurchase > 500 ){
        discount = sumPurchase * 7 / 100;
        console.log(discount);
    }
