/*
-----------------------
1. Примітивні (Прості) типи 
-String (Текст)
--Number ((Int) Число)
-Boolean (логічний тип) 
-null
-undefined
-symbol
-bigint
--------------------------
2. Об'єкти
-об'єкт {}
-массиви
-об'єкт дати
-регулярні вирази
-помилки (errors)
*/

let number = 5;
let floatNumber = 5.5;
//в резільтаті матем операцій>>> infinity, NaN (Not a Number)
console.log(4/0); //infinity
console.log(-4/0); //infinity

console.log("string"*4); //NaN

//boolean
//бінарний тип, може приймати тільки 2 значення, для збкрігання первних логічних операцій(true, false)
//результат усіх перевірок в тестах (правильність кольору, наявність тексту і т.д.)
let isExist = true; //false

//null (конкретне значення), undefined (відсутність будь-якого значення - змінна, яку тільки об'вили і не присвоїли значення
let value = null;
console.log(value);

let value2;
console.log(value2);


//object
let obj = {};

let person = {
    name: "Anastasiia",
    age: 24,
    status: {
        qw1: 123,
        qw2: 1234
    }
};
console.log(person.status.qw1);

let person1 = new Object();
person1.name = "Anastasiia2";
person1.age = 25;

//console.log(person);
//console.log(person1);

console.log(`name: ${person1.name}`)
console.log(`name: ${person1.age}`)

let endpoint = 'help'
console.log(`https://someurl/${endpoint}`)

//arrays
let arr = ['text', 'some text', 6, {name: 123}, []];
console.log(arr);

//вивести конкретне значення з масиву
let arr = ['text', 'some text', 6, {name: 123}, []];
console.log(arr[0]);
console.log(arr[3]);
console.log(arr[5]); //undefined

//обєявлення типів
let numArr = [1, 2, 3];
let numObj = {
    a:1, 
    b:2, 
    c:3
};
console.log(numArr[0]);
console.log(numObj.a);

let salary = {
    'Anna': 1000,
    'Vlada': 1200
};

let salaryArr = ['Anna', 1000, 'Vlada', 1200];
console.log(salaryArr[0]);

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
let someText = "Hello world";
console.log(someText.length);
console.log(someText.substring(0, 6)); //іирізати якийсь кількість тексту з усього наявного
console.log(someText.toUpperCase());//перетворити кейс на аппер кейс
console.log(someText.toLowerCase());//перетворити кейс на ловер кейс
console.log(someText.indexOf('o'));//порядковий номер кожного символу в рядку
console.log(someText.trim());//видаляє пробіли, табуляцію, перенос рядка
console.log(someText.charAt(5));//вирізає букву за індексом
console.log(someText[1]);//дістатися до кожної окремої букви в рядку

let myArr = [];
myArr.push("Good");//додає елемени в массив
myArr.push("evening");
console.log(myArr);
console.log(myArr.length);//ДОВЖИНА МАСИВУ
console.log(myArr.join(" "));//ОБ'ЄДНАТИ І ВИВЕСТИ ЯК РЯДОК з тим роздідюваем, який треба
cconsole.log(myArr.pop());//повртає останній елемент масиву
console.log(myArr);

//видалити одну з властивостй об'єкта
let newObj = {
    a: 1,
    b: 2, 
    c: 'qwer',
}
console.log(newObj.a);
delete newObj.a
console.log(newObj);
console.log(newObj.c.length);

let someNum = 12.4;
console.log(Math.round(someNum));//округлити число до цілого

let resolution = "12.4px";
console.log(parseInt(resolution));;//дістати зі змінної ціле число
console.log(parseFloat(resolution));//дістати повне цифрове значення