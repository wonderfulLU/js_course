//конкатинація знак "+"
console.log('arr' + '- object');//склеює рядки

console.log(2 + 2);//додавання
console.log(2 + '2');//конкатинація- динамічне приведення типів
console.log(2 + + '2'); //додавання - переводить стрінг в намбер

//інкременти, декременти (для скорочення коду) - збільшення або зменшення значення на одиницю
let incr = 10;
let decr = 10;

incr++; //постфіксна форма  - - інкремент - збільшення на 1
decr--; //постфіксна форма  - - декремент - зменшення на 1
console.log(incr);
console.log(decr);

++incr; //префіксна форма
--decr; //префіксна форма
console.log(incr);
console.log(decr);

//------------------або

let incr1 = 10;
let decr1 = 10;
console.log(incr1++);//спочатку  виводимоб а потім робимо дії зі значенням, тому значення незмінне
console.log(decr1--);
console.log(++incr1);//спочатку робимо дії зі значенням а потім виводимо
console.log(--decr1);

//математичні оператори порівняння
console.log(5 < 2);
console.log(5%2);//отримання остачі від ділення

console.log(2*4 = 8);//невірний запис порівняння    =-це знак присвоєння, а не порівняння
console.log(2*4 == 8);//вірний запис порівняння
console.log(2*4 == '8');//вірний запис порівняння
console.log(2*4 === '8');//для виконання більш точного порівняння і не приводить дані до певного одного типу
console.log(2*4 === 8);

//логічні оператори    І та АБО
let isChecked = true;
let isClosed = false;
console.log(isChecked && isClosed); //порівняння логічне І
console.log(isChecked || isClosed); //порівняння логічне АБО

//оператор заперечення - перетворює boolean значення на протилежне
let isChecked1 = false;
let isClosed1 = true;
console.log(!isChecked1 && isClosed1); //оператор заперечення
console.log(isChecked1 || isClosed1); 

//хочу купити щось, якщо ОБИДВА товари є в наявності, то гуд
let hamburger2 = true;
let fries2 = true;//false - нічого не виведеться, не наївся 
if (hamburger2&&fries2){
    console.log('Я ситий')
}

let hamburger1 = 5;
let fries1 = 1;
if (hamburger1&&fries1){
    console.log('Я ситий')
}

let hamburger3 = 5;
let fries3 = 0;
console.log(hamburger3&&fries3)//якщо 0 - то не наївся - не повертає

//5 значень які приводять до false: NULL, undefined, NaN, 0, ""(пустий рядок)

//щоб були 3 гамбургени і колу або 2 порції нагетсів, або 2 картоплі фрі
let hamburgers =2;
let cola = 2;
let nuggets = 2;
let fries = 2; //якщо =1, то нічого не виведется
if(hamburgers >= 3 && cola || nuggets >= 2 && fries >= 2){
    console.log('всі поїли') 
}

