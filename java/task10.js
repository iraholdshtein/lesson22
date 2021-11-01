/*Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа. За каждый правильный 
ответ начисляется 2 балла. После вопросов выведите пользователю количество набранных баллов.*/

const question1 = prompt("Назовите столицу Украины (Kиев|Москва|Кишинев)", " ");
let answerQuestion1 = "киев";

const question2 = prompt("Сколько пар конечностей у паука? (6|8|4)", " ");
let answerQuestion2 = "6";

const question3 = prompt("Назовите самую длинную реку в мире (Нил|Амазонка|Миссисипи)", " ");
let answerQuestion3 = "нил";
let countAnswer = 0;

 
        ( question1.toLowerCase() == answerQuestion1) ? countAnswer+=2 : console.log("Не правильно!");
       
        console.log(answerQuestion1);


       ( question2.toLowerCase() == answerQuestion2) ? countAnswer+=2 : console.log("Не правильно!");
      
       console.log(answerQuestion2);
    

        ( question3.toLowerCase() == answerQuestion3) ? countAnswer+=2 : console.log("Не правильно!");
        
        console.log(answerQuestion3);


        console.log(`Ваши балы ${countAnswer}`);



