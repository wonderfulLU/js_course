//конкатинація
console.log('arr' + '- object');//склеює рядки

console.log(2 + 2);//додавання
console.log(2 + '2');//конкатинація
console.log(2 + + '2'); //додавання

//інкременти, декременти - збільшення або зменшення значення на одиницю
let incr = 10;
let decr = 10;

incr++; //постфіксна форма
decr--; //постфіксна форма
console.log(incr);
console.log(decr);

++incr; //префіксна форма
--decr; //префіксна форма
console.log(incr);
console.log(decr);

//------------------або

let incr = 10;
let decr = 10;
console.log(incr++);
console.log(decr--);
console.log(++incr);
console.log(--decr);

//математичні оператори порівняння
console.log(5 < 2);
console.log(5%2);//отримання остачі від ділення

console.log(2*4 = 8);//невірний запис порівняння    =-це знак присвоєння, а не порівняння
console.log(2*4 == 8);//вірний запис порівняння
console.log(2*4 == '8');//вірний запис порівняння
console.log(2*4 === '8');//для виконання більш точного порівняння і не приводить дані до певного типу
console.log(2*4 === 8);

//логічні оператори    І та АБО
let isChecked = true;
let isClosed = true;
console.log(isChecked && isClosed); //порівняння логічне
console.log(isChecked || isClosed); 

//оператор заперечення - перетворює boolean значення на протилежне
let isChecked = false;
let isClosed = true;
console.log(!isChecked && isClosed); 
console.log(isChecked || isClosed); 

//хочу купити щось, якщо ОБИДВА товари є в наявності, то гуд
let hamburger = true;
let fries = true;//false - нічого не виведеться, не наївся 
if (hamburger&&fries){
    console.log('Я ситий')
}

let hamburger1 = 5;
let fries1 = 1;
if (hamburger1&&fries1){
    console.log('Я ситий')
}

let hamburger1 = 5;
let fries1 = 0;
console.log(hamburger1&&fries1)//якщо 0 - то не наївся - не повертає

//5 значень які приводять до false: NULL, undefined, NaN, 0, ""(пустий рядок)

//щоб були 3 гамбургени і колу або 3 порції нагетсів, або 3 картоплі фрі
let hamburgers =2;
let cola = 2;
let nuggets = 2;
let fries = 2; //якщо =1, то нічого не виведется
if(hamburgers >= 3 && cola || nuggets >= 2 && fries >= 2){
    console.log('всі поїли') 
}

