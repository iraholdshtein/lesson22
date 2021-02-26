
 /*------------Task 2--------------*/
 /*Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол, который расположен 
 на этой клавише (1–!, 2–@, 3–# и т. д).*/
 
 let anynumber = prompt("enter a number from 0 to 9");
 switch (anynumber) {
    case "0":
      console.log("0 +is )");
      break;
    case "1":
      console.log("1 +is !");
      break;
    case "2":
      console.log("2 +is @)");
      break;
    case "3":
      console.log("3 +is №");
      break;
    case "4":
      console.log("4 +is $");
      break;
    case "5":
      console.log("5 +is %");
      break;
    case "6":
      console.log("6 +is ^");
      break;
    case "7":
     console.log("7 +is &");
      break;
    case "8":
      console.log("8 +is *");
      break;
      case "9":
      console.log("9 +is (");
      break;
    default:
        console.log("Please, enter a number from 0 to 9");  
  }


