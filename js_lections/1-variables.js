//Змінні
//let number=5;//сховище - можна змінювати
//const userScore=1000;//сховище для інформації, змінювати не можна

let number1;//не можна щоб починалося на цифру(цифру всередині можна), error, alert... 
//camelCase - змінні
//snake_case - для констант
//upper_snake_case - для констант
//kebeb-case - для папок, директорий
//paskalCase - 

let nUmber=123;

let number=5;//let - призначає змінну
number=12; //щоб перепризначити змінну - не треба let
console.log(number)

const userScore=1000;
userScore=12; //failed
console.log(userScore)

const obj = {   //призначити об'єкт
    age: 20
}
obj.age = 30; //можна змінювати властивості об'єкта
console.log(obj)

var firstName = 'Nastya'; //змінна,майже як let; але>>>>
console.log(firstName)


{
    let result=50;
}
console.log(result) //ReferenceError: result is not defined

{
    var result=50;
}
console.log(result) // var доступний по всьому файлу

a=10;
console.log(a)

alert();
[].push('a')

let a=3000;
let b=2000;
/// 100 lines of code
console.log("Ширина авто: " + a + ", довжина: " + b)

let width = 3000;
let length = 2000
/// 100 lines of code
console.log("Ширина авто: " + width + ", довжина: " + length)

let vehicleBodyWidth = 3000;
let vehicleBodyLength = 2000
/// 100 lines of code
console.log("Ширина авто: " + vehicleBodyWidth + ", довжина: " + vehicleBodyLength)


