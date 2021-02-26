
 /*------------Task 7--------------*/
 /*Запросить у пользователя длину окружности и периметр квадрата. Определить, может ли такая
 окружность поместиться в квадрат
  */
const LenghtCircle = parseInt(prompt
    ("Enter a lenght circle, please."),);

const SquarePerimetr = parseInt(prompt(
    "Enter a perimetr of a square, please"),);

    let DiametrCircle = ( LenghtCircle /  Math.PI );
    let SquareSide = ( SquarePerimetr / 4 );

    if  (DiametrCircle <= SquareSide)
    {
       console.log  (true);
    }
    else  (DiametrCircle > SquareSide)
    {
        console.log (false);
    }
    
/*это самая легкая задача*/
