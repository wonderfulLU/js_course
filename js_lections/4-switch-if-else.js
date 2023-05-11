//умови програмування
if(4==9){ //якщо одна умова, то фігурні дужки можна не ставити
    console.log('Expression is true')
} else {
    console.log('Expression is false')
}//false

if(4){ 
    console.log('Expression is true')
} else {
    console.log('Expression is false')
}//true

let num = 50;
if(num < 49){
    console.log('error')
} else if (num > 100){
    console.log('some big number')
} else {
    console.log('ok')
}

//тернарний оператор!!!!! - бо в записі потребує три аргументи
let num1 = 50;
(num1 === 50) ? console.log('ok') : console.log('error')//якщо твердження істинне, товтконається те, що стоїть після ?

//switch case - - коли цікавить пряме порівняння з рядом можливих значень
let number = 50;
switch(number){
    case 49:
        console.log('Your value is 49');
        break;
    case 50:
        console.log('Your value is 50');
        break;  
    case 51:
        console.log('Your value is 51');
        break;
    case 52:
        console.log('Your value is 52');
        break;
    default:  //для тих випадків коли немає зазначенного значення
        console.log('This is default output');
        break;
}  //коли логіка потребує розгалудження

//якщо купуєте BMW, товиводити в консоль BMW, аналогічно Audi, Mersedes, Ford
let car = null;
switch(car){
    case 'BMW':
        console.log("I'm an owner owner of BMW");
        break;
    case 'Audi':
        console.log("I'm an owner owner of Audi");
        break;  
    case 'Mersedes':
        console.log("I'm an owner owner of Mersedes");
        break;
    case 'Ford':
        console.log("I'm an owner owner of Ford");
        break;
    default:
        console.log("I'm had walking without a car");
        break;
} //використовується наприклад для кнопки, яка міняє колір і в залежності від цього виконує різні дії - -в кейсі колір кнопки


