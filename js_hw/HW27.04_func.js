//Домашка:

/*1.  Ви прийшли в Макдональдз з трьома друзями.
    Всі вони хочуть зʼїсти гамбургер. Ви хочете зʼїсти гамбургер з картоплею.
    Реалізувати код, який буде перевіряти, що якщо всім вистачає гамбургерів і картоплі,
    то виводити текст "Ми поїли" в консоль. Якщо на всіх не вистачає їжі,
    то виводити в консоль текст "Ми йдемо в інше кафе"
    (Змінні типу інтеджер містять кількість продуктів в наявності у вигляді вхідних даних)*/

const dinner = (hamburgers, fries) => {
    if(hamburgers >= 4 && fries >= 1){
        console.log("Ми поїли");
    } else {
        console.log("Ми йдемо в інше кафе");
    }
}
dinner(4, 2)


function dinner1(hamburgers, fries){
    if(hamburgers >= 4 && fries >= 1){
        console.log("Ми поїли");
    } else {
        console.log("Ми йдемо в інше кафе");
    }
}

dinner1(4, 2)
dinner1(0,2)
dinner1(1,2)
dinner1(5,3)
      
/*2.  Напишіть умовну конструкцію if, що перевіряє, чи знаходиться значення ціни товару між 1000 та 1900 включно.
    Результат виводити в консоль.*/

function price1(price){
    if(price >= 1000 && price <= 1900){
        console.log('true');
    } else {
        console.log('false');
    }
}
price1(1200)


const price2 = (price) =>{
    if(price >= 1000 && price <= 1900){
        console.log('true');
    } else {
        console.log('false');
    }
}

price2(1200)
price2(1000)
price2(1901)
    
/*3.  Напишіть конструкцію if, що перевіряє, чи значення ціни товару не знаходиться між 1000 та 1900 включно.
    Реалізуйте два варіанти, один з оператором НЕ !, а інший без цього оператора.
    Результат виводити в консоль.*/

function price3(price1){
    if(!(price1 >= 1000 && price1 <= 1900)){
        console.log('true');
    } else {
        console.log('false');
    }
}

price3(1901)
price3(1020)
price3(2901)


const price4 = (price2) => {
    if(price2 <= 999 || price2 >= 1901){
        console.log('true');
    } else {
        console.log('false');
    }
}
    
price4(1901)
price4(1020)
price4(2901)

/*4.  За номером пори року вивести назву цієї пори року використовуючи оператор if-else-if
    Результат виводити в консоль.*/

const seasons = (season) => {
    if(season == 1){
        console.log('Winter')
    } else if (season == 2){
        console.log('Spring')
    } else if (season == 3){
        console.log('Summer')
    } else if (season == 4){
        console.log('Autumn')
    } else {
        console.log('Currently, only four seasons are known. Try counting again')
    }
}

seasons(1)
seasons(2)
seasons(3)
seasons(4)
seasons(10)
                
/*5.  Задано 3 числа (a, b, c), які не рівні між собою.
    Визначити середнє між цими трьома числами
    (не середнє арифметичне значення, а яке з трьох заданих чисел среднє за значенням) використовуючи оператор if-else.
    Використати вкладені оператори if
    Результат виводити в консоль.*/

    const avg = (a, b, c) => {
        if((a < b && b < c) || (c < b && b < a)){
            console.log(b) 
        } else if((b < a && a < c) || (c < a && a < b)){
            console.log(a) 
        } else if((b < c && c < a) || (a < c && c < b)){
            console.log(c) 
        }
    }

    avg(0, 7, 3)
    avg(0, 7, 2)
    avg(1, 5, 3)

/*6.  Задано номер дня тижня.
    За заданим номером вивести назву дня тижня використовуючи switch.
    Результат виводити в консоль.*/

const Day = (DayNumber) => {
    switch(DayNumber){
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;  
        case 3:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Saturday");
            break;
        case 7:
            console.log("Sunday");
            break;
        default:
            console.log("Plz, Match days more carefully");
            break;
    }
}

Day(1)
Day(3)
Day(5)
Day(7)
Day(10)
    
/*7.  За допомогою switch реалізуйте обчислення виразу, передаючи у switch, як параметр, символ математичної операції.
    Математичні операції для обчислення: "+", "-", "*", "/".
    Результат виводити в консоль.*/

const Math = (a, b, calc) => {
    switch(calc){
        case "+":
            console.log(a + "+" + b + "=" + (a + b));
            break;
        case "-":
            console.log(a + "-" + b + "=" + (a - b));
            break;  
        case "*":
            console.log(a + "*" + b + "=" + (a * b));
            break;
        case "/":
            console.log(a + "/" + b + "=" + (a / b));
            break;
        default:
            console.log("Unknown operation");
            break;
    }
}

Math(4, 6, "*")
Math(5, 3, "/")
Math(1, 7, "-")

/*8.*  Використовуючи властивості рядків (тип string), та регулярний вираз (regular expression) видалити голосні букви зі слова.*/
    
const WithoutVovels = (text) => {
    str = text.replace(/[aeiou]/gi, '');
    console.log(str);
}

WithoutVovels("In JavaScript, a regular expression text search, can be done with different methods.")

/*9.*  Використовуючи оператор if реалізувати логіку переводу метрів в кілометри,
    так щоб в консоль виводився результат обчислень з правильним закінченням.
    Наприклад: 1000 метрів це 1 кілометр;  32 метри це 0,032 кілометра і т.д.

    Підказка(https://ukr-lifehacks.ed-era.com/rozdil-9/zvyazok_chislivnykiv)*/

const MetrToKilometr = (metr) => {
    let kilometr = metr / 1000

    FindTheEnd = (num) => {
        if(Number.isInteger(num)) {
            let leftOver = num%10;
            if (leftOver == 0 || (num%1 == 0 && num >= 11 && num <= 19)) {
                end = "ів"
            } else if (leftOver == 1) {
                end = ""
            } else if (leftOver >= 2 && leftOver <= 4) {
                end = "и"
            } else if (leftOver >= 5 && leftOver <= 9) {
                end = "ів"
            }
        } else {
            end = "а"
        }

        return end
    }
    console.log(`${metr} метр${FindTheEnd(metr)} це ${kilometr} кілометр${FindTheEnd(kilometr)}`);
}

MetrToKilometr(57587)


    let metr = 7854
    let km = metr / 1000
    let arr = [metr, km]
    let result = "";

    for(let i = 0; i < arr.lenght; i++){
        let num = arr[i];
        let ending = "";
        if (num === Math.round(num)) {
            if (num % 10 === 0 || (num % 10 >= 5 && num % 10 <= 19)){
                ending = "ів"
            } else if (num % 10 === 1) {
                ending = ""
            } else if (num % 10 >= 2 && num % 10 <= 4) {
                ending = "и"
            }
        } else {
            ending = "а"
        }

        if (i === 0){
            result = (`${metr} метр${ending} =  `)
        } else {
            result = `${result} ${km} кілометр${ending}`
        }
    }

    console.log(result)



    //or
    for (let i = 1 ; i <= 2000; i++) {
        let metr = 1000 * i + 123;
        km = metr/1000;
        const kmText = ' кілометр'
        let kmNumText = (km + '').split('.')[0]
        let last = kmNumText[kmNumText.length-1]
        let predLast = (km > 9) ? kmNumText[kmNumText.length-2] : 0;
        //console.log(last)
        //console.log(km)
        
        if (km < 1){ //0,032 or 1,564
            console.log(km + kmText + 'а')
        } else if(last == 1 && predLast !=1){
            console.log(km + kmText)
        } else if (last < 5 && last > 1 && predLast !=1){
            console.log(km + kmText + 'и')
        } else {
            console.log(km + kmText + 'ів')    
        }
    }


   

