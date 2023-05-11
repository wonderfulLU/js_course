//Змінні
let number = 5;//сховище - можна змінювати
const userScore = 1000;//сховище для інформації, змінювати не можна
//назва може складатися з букв, цифр, $, _
//назва НЕ може складатися з спецсимволів та починатися на цифру

let number2;//не можна щоб починалося на цифру(цифру всередині можна), не можна називати зарезервованими словами типу error, alert, exeption, finally, class... 
//camelCase - називають змінні
//snake_case - для назв констант
//UPPER_SNAKE_CASE - для назв констант
//kebeb-case - для назв файлів, папок, директорий
//paskalCase - паттерн для назв класів 

let nUmber = 123;

let number1 = 5;//let - призначає змінну
number1 = 12; //щоб перепризначити змінну - не треба let
console.log(number1)

const userScore1 = 1000;
userScore1 = 12; //failed - конст не переназначається
console.log(userScore1)

const obj = {   //призначити об'єкт
    age: 20
}
obj.age = 30; //можна змінювати властивості об'єкта
console.log(obj)

var firstName = 'Nastya'; //змінна,майже як let; але>>>> 
console.log(firstName)

{
    let result = 50;
}
console.log(result) //ReferenceError: result is not defined

{
    var result = 50;
}
console.log(result) // var доступний по всьому файлу

a = 10;
console.log(a);

alert();
[].push('a');

let a = 3000;
let b = 2000;
/// 100 lines of code
console.log("Ширина авто: " + a + ", довжина: " + b);

let width = 3000;
let length = 2000;
/// 100 lines of code
console.log("Ширина авто: " + width + ", довжина: " + length);

let vehicleBodyWidth = 3000; //треба максимально зрозуміло називати змінні
let vehicleBodyLength = 2000;
/// 100 lines of code
console.log("Ширина авто: " + vehicleBodyWidth + ", довжина: " + vehicleBodyLength);


