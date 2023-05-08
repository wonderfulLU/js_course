
//Домашка:

/*1.  Ви прийшли в Макдональдз з трьома друзями.
    Всі вони хочуть зʼїсти гамбургер. Ви хочете зʼїсти гамбургер з картоплею.
    Реалізувати код, який буде перевіряти, що якщо всім вистачає гамбургерів і картоплі,
    то виводити текст "Ми поїли" в консоль. Якщо на всіх не вистачає їжі,
    то виводити в консоль текст "Ми йдемо в інше кафе"
    (Змінні типу інтеджер містять кількість продуктів в наявності у вигляді вхідних даних)*/

    let hamburgers = 4;
    let fries = 2;

    if(hamburgers >= 4 && fries >= 1){
        console.log("Ми поїли");
    } else {
        console.log("Ми йдемо в інше кафе");
    }
  
/*2.  Напишіть умовну конструкцію if, що перевіряє, чи знаходиться значення ціни товару між 1000 та 1900 включно.
    Результат виводити в консоль.*/

    let price = 1900;

    if(price >= 1000 && price <= 1900){
        console.log('true');
    } else {
        console.log('false');
    }

/*3.  Напишіть конструкцію if, що перевіряє, чи значення ціни товару не знаходиться між 1000 та 1900 включно.
    Реалізуйте два варіанти, один з оператором НЕ !, а інший без цього оператора.
    Результат виводити в консоль.*/

    let price1 = 1901;

    if(!(price1 >= 1000 && price1 <= 1900)){
        console.log('true');
    } else {
        console.log('false');
    }


    let price2 = 1901;

    if(price2 <= 999 || price2 >= 1901){
        console.log('true');
    } else {
        console.log('false');
    }

/*4.  За номером пори року вивести назву цієї пори року використовуючи оператор if-else-if
    Результат виводити в консоль.*/

    let season = 5;
        
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
            
/*5.  Задано 3 числа (a, b, c), які не рівні між собою.
    Визначити середнє між цими трьома числами
    (не середнє арифметичне значення, а яке з трьох заданих чисел среднє за значенням) використовуючи оператор if-else.
    Використати вкладені оператори if
    Результат виводити в консоль.*/

    let a = 0;
    let b = 7;
    let c = 3;
    if((a < b && b < c) || (c < b && b < a)){
        console.log(b) 
    } else if((b < a && a < c) || (c < a && a < b)){
        console.log(a) 
    } else if((b < c && c < a) || (a < c && c < b)){
        console.log(c) 
    }
    
    //(a != b && a != c && b != c)

/*6.  Задано номер дня тижня.
    За заданим номером вивести назву дня тижня використовуючи switch.
    Результат виводити в консоль.*/

    let DayNumber = 7;
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

/*7.  За допомогою switch реалізуйте обчислення виразу, передаючи у switch, як параметр, символ математичної операції.
    Математичні операції для обчислення: "+", "-", "*", "/".
    Результат виводити в консоль.*/

    let a = 10;
    let b = 2;
    calc = "*";
switch(calc){
    case "+":
        console.log(a + calc + b + "=" + (a + b));
        break;
    case "-":
        console.log(a + calc + b + "=" + (a - b));
        break;  
    case "*":
        console.log(a + calc + b + "=" + (a * b));
        break;
    case "/":
        console.log(a + calc + b + "=" + (a / b));
        break;
    default:
        console.log("Unknown operation");
        break;
}

/*8.*  Використовуючи властивості рядків (тип string), та регулярний вираз (regular expression) видалити голосні букви зі слова.*/

    let text = "In JavaScript, a regular expression text search, can be done with different methods.";
    str = text.replace(/[aeiou]/gi, '');
    console.log(str);
    
    //https://learn.javascript.ru/regexp-introduction
    //i --- С этим флагом поиск не зависит от регистра: нет разницы между A и a.
    //g --- С этим флагом поиск ищет все совпадения, без него – только первое.

/*9.*  Використовуючи оператор if реалізувати логіку переводу метрів в кілометри,
    так щоб в консоль виводився результат обчислень з правильним закінченням.
    Наприклад: 1000 метрів це 1 кілометр;  32 метри це 0,032 кілометра і т.д.

    Підказка(https://ukr-lifehacks.ed-era.com/rozdil-9/zvyazok_chislivnykiv)*/

    let metr = 4990;
    km = metr/1000;
    if (km < 1.0){ //0,032 or 1,564
        console.log(km +' кілометр' + 'а')
    } else if(km == 1.0){
        console.log(km +' кілометр')
    } else if (km > 1.0 && km < 5.0){
        console.log(km +' кілометр' + 'и')
    } else if (km >= 5.0){
        console.log(km +' кілометр' + 'ів')    
    }



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


    //or
    let metr = 999;
    km = metr/1000;
    if(metr < 1.0){
        console.log(metr + ' метра' + ' це ' + km +' кілометра')
    } else if(metr == 1.0){
        console.log(metr + ' метр' + ' це ' + km +' кілометра')   
    } else if (metr > 1.0 && metr < 5.0){
        console.log(metr +' метри' + ' це ' + km +' кілометра')
    } else if (metr >= 5.0 && km < 1.0){
        console.log(metr + ' метрів' + ' це ' + km +' кілометра')
    } else if(km == 1.0){
        console.log(metr + ' метрів' + ' це ' + km +' кілометр')
    } else if (km > 1.0 && km < 5.0){
        console.log(metr + ' метрів' + ' це ' + km +' кілометри')
    } else if (km >= 5.0){
        console.log(metr + ' метрів' + ' це ' + km +' кілометрів')    
    }

