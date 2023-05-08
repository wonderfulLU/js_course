//певний блок коду, який можна багаторазово виконувати
//функції бувають іменовані, анонімні, присвоєні якійсь зменній, можуть бути аргументом виклику іншох функції, присвоєння властивості об'єкту

//приклад коли дубдюється код >>>
let a = 5;
let b = 3;
let c;
c = a + b;
console.log(c)
///some code
a = 8;
b = 12;
c = a + b;
console.log(c)


//іменовані ф-ції
//functions, яка виконує той самий код
function sum (a, b){ //(a, b) - параметри, змінні всередині функції, дтнамічно передаються всередину ф-ції при її виклику
    let c = a + b;
    console.log(c);
}
sum(8, 12); //(8, 12) - -аргументи ф-ції; sum(8, 12) - -виклик ф-ції
sum(3, 12);
sum(454545, 12);


function sum1 (a, b){ 
    let c = a + b;
    return c; //повернення результату всередні ф-ції, ф-ція припиняється після return
    console.log('hjhgjh')
}
console.log(sum1(8, 12));


//анонімна ф-ція
const anonimFunc = function (a, b){ //присвоюємо змінній
    let c = a + b;
    console.log(c)
}
anonimFunc(1, 2);


const arrowFunc = (a, b) => { //стрілочна ф-ція
    let c = a + b;
    console.log(c)
}
arrowFunc(1, 2);


const funcWithDefailtParam = (a, b = 2) => { //з дефолтними параметрами
    return (a * b)
}
console.log(funcWithDefailtParam(3, 5))
console.log(funcWithDefailtParam(3))

console.log(Date()) //дефолтні параметри дати


const myRequestWithDate = (field1, timestamp = Date()) => {
    let requestBody = {
        someData: 1,
        someData2: 2,
        timestamp: ''
    }
    requestBody.someData = field1;
    requestBody.timestamp = timestamp;

    return requestBody;  //код після return не запускається!!!!!
}

console.log(myRequestWithDate('werwer', '1231254'));
console.log(myRequestWithDate('hjhfhgfd'));


const playWithReturnFunc = () => {
    for(let i = 0; i < 8; i++){
        console.log(i);
        if(i === 6){
            return 'return as a break' //код після return не запускається!!!!!
        }
    }
}

console.log(playWithReturnFunc());


//кол бек ф-ції - - для впорядкування дій виконання ф-цій (спосіб оголошення ф-цій) в джаваскріпт
//коли час виконання певних дій відрізнається - - -запити на сервер наприклад, один, потім другий - - для синхронізації подій
function first(){
    console.log('First')
}

first();//виклик ф-ції


function someFunc(){
    console.log('hello')
}
setTimeout(someFunc, 5000) //setTimeout  - - - штучна затримка через 5 секунд


function first(){
    setTimeout(function(){
        console.log('First')
    }, 5000)
}
    function second (){
        console.log('Second')
    }

    first();
    second();


    function someFunctionWithCallback(param1, callbackFunction){
        console.log(`Here is my parameter: ${param1}`); //${param1} - -інтерполяція
        //виклик ф-ції в потрібному місці
        callbackFunction();
    }

    someFunctionWithCallback('paramasd123', function(){
        console.log('Text from callback')
    })


//конструктивний приклад реалізації тестів с Mocka
function it (testDescription, testActions){
    console.log(`Here is my test description: ${testDescription}`);
    testActions();
}

it('Auth test', ()=> {
    console.log('Some test action...')
})



