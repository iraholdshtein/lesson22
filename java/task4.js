//Запросить у пользователя трехзначное число и проверить, есть ли в нем одинаковые цифры.

let number = prompt("Введите пожалуйста 3-х значное число", '');
let a = number.slice(0,1);
    console.log(a); 

    let b = number.slice(1,2);
    console.log(b); 

    let c = number.slice(2,3);
    console.log(c); 

if (number.length == 3){
   
   /* if (a == b || a == c || b == c){
        console.log("Совпадения найдены");
    }else{
        console.log("Совпадений нет");
    }*///первый вариант

    //второй вариант
        (a == b || a == c || b == c)? console.log("Совпадения найдены"):console.log("Совпадений нет");

  
}else{
    console.log(prompt("введите 3 цифры"));
}