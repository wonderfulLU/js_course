/*
-----------------------
1. Примітивні (Прості) типи 
-String (Текст)
-Number ((Int) Число)
-Boolean (логічний тип) 
-null
-undefined
-Symbol
-bigint
--------------------------
2. Об'єкти 
Звичайні:
-об'єкт {}
Спеціальні:
-масиви
-об'єкт дати
-регулярні вирази
-помилки (errors) - -ексепшени
*/

let number = 5;
let floatNumber = 5.5;
//в резільтаті матем операцій>>> infinity, NaN (Not a Number)
console.log(4/0); //infinity
console.log(-4/0); //infinity

console.log("string" * 4); //NaN

//boolean
//бінарний тип, може приймати тільки 2 значення, для зберігання первних логічних операцій(true, false)
//результат усіх перевірок в тестах (правильність кольору, наявність тексту і т.д.)
let isExist = true; //false

//null (конкретне значення), undefined (відсутність будь-якого значення - змінна, яку тільки об'вили і не присвоїли значення
let value = null;
console.log(value);//value is not defined

let value2;
console.log(value2);//undefined


//object - нативний спосіб зберігання даних
let obj = {};

//призначення обєкту
let person = {
    name: "Anastasiia",
    age: 24,
    status: {
        qw1: 123,
        qw2: 1234
    }
};
//xPath
console.log(person.status.qw1);

//або так
let person1 = new Object();
person1.name = "Anastasiia2";
person1.age = 25;
//console.log(person);
//console.log(person1);

//інтерполяція
console.log(`name: ${person1.name}`)
console.log(`age: ${person1.age}`)

let endpoint = 'help'
console.log(`https://someurl/${endpoint}`)

//arrays
//ЗАЯВЛЕННЯ МАСИВУ
let arr = ['text', 'some text', 6, {name: 123}, []];
console.log(arr);

//вивести конкретне значення з масиву - значення починаються з )
let arr1 = ['text', 'some text', 6, {name: 123}, []];
console.log(arr1[0]);
console.log(arr1[3]);
console.log(arr1[5]); //undefined - бо п'ятого елементу нема

//об'явлення типів масиву
let numArr = [1, 2, 3];
let numObj = {
    a:1, 
    b:2, 
    c:3
};
console.log(numArr[0]);
console.log(numObj.a);

let salary = {
    'Anna': 1000,//!!!! ТРЕБА брати ключ в "!!!"
    'Vlada': 1200
};

let salaryArr = ['Anna', 1000, 'Vlada', 1200];
console.log(salaryArr[0]);//якщо ключом є цифра, то доступ до значення як в масиві [...]

//те саме але як об'єкт
let someArrObj = {
    0: 'Anna',
    1: 1000, 
    2: 'Vlada',
    3: 1200
};
console.log(someArrObj[0]);

let someArrObj2 = {
    a: 'Anna',
    b: 1000, 
    c: 'Vlada',
    d: 1200
};
console.log(`b1: ${someArrObj2["b"]}`);

//як змінювати об'єкти
someArrObj2.b = 2000;
console.log(`b2: ${someArrObj2["b"]}`);

//дії над тими чи їншими типами
let someText = "Hello world!!!";
console.log(someText.length);
console.log(someText.substring(0, 6)); //вирізати якийсь кількість тексту з усього наявного
console.log(someText.toUpperCase());//перетворити кейс на аппер кейс
console.log(someText.toLowerCase());//перетворити кейс на ловер кейс
console.log(someText.indexOf('o'));//порядковий номер кожного символу в рядку
console.log(someText.trim());//видаляє пробіли, табуляцію, перенос рядка
console.log(someText.charAt(6));//вирізає букву за індексом
console.log(someText[1]);//дістатися до кожної окремої букви в рядку

//робота з масивами
let myArr = [];
myArr.push("Good");//додає елемени в массив
myArr.push("evening");
console.log(myArr);
console.log(myArr.length);//ДОВЖИНА МАСИВУ
console.log(myArr.join(" "));//ОБ'ЄДНАТИ І ВИВЕСТИ ЯК РЯДОК з тим роздідюваем, який треба
console.log(myArr.pop());//перебирає масив і повертає останній елемент масиву
console.log(myArr);

//видалити одну з властивостй об'єкта
let newObj = {
    a: 1,
    b: 2, 
    c: 'qwer'
}
console.log(newObj.a);
delete newObj.a //видалити одну з властивостей об'єкта
console.log(newObj);
console.log(newObj.c.length);

//математичні операції метод Math
let someNum = 12.4;
console.log(Math.round(someNum));//округлити число до цілого

let resolution = "12.4px";
console.log(parseInt(resolution));//дістати зі змінної ціле число
console.log(parseFloat(resolution));//дістати повне цифрове значення