//для автоматизації певниї однотипних дій
//для повторення циклів тестування, перебору данних
//пройтись декілька разів по сценаріямб елементам списку, наявності тексту, візуальнихlet num = 50;

//while - -не підтримується сайпрес
let num = 50;
while(num < 90){
    console.log(num); //infinite loop
}   ///вийти з циклу  - - клікнути в термінал ctrl+c

let num1 = 80;
while(num1 < 90){
    console.log(num1);
    num1++;//збільшення наступного числа на 1
}

//do - while - дозволяє одразу виконати якісь дії на початку без перевірки вказаної умови, тобто точно виконає одну ітерацію, а потім тількт буде первірка умови, не підтримується сайпрес
let num2 = 80;
do{
    console.log(num2);
    num2++;
}while(num2 < 90)

//for
for(let i = 1; i < 8; i++){  //i = 1 - -з чого почнеться цикл, i < 8 - - до якого моменту буде продовжуватись-кількість ітерацій, i++ - - з яким кроком буде відбуватись
    console.log(i)//i -->>--iterator
}

num3 = 10;
for(let i = 1; i < 8; i++){
    console.log(num3)//i -->>--iterator
    num3++;
}

num4 = [1, 2, 3, 4];
for(let i = 0; i < num4.lenght; i++){ //з першого елементу масиву і до кінця
    console.log(num4);
    num4++;
}

num5 = 10;
for(let i = 0; i <= 0; i--){ //безкінечний цикл, немає умов виходу
    console.log(num5);
    num5++;
}

//коли треба зупинити виконання циклу при певних умовах, коли змінна набула вже певного значення
num6 = 0;
for(let i = 0; i < 8; i++){
    if(num6 === 5){
        break;//коли num6=5, то в консоль вже не вивелось
    }
    console.log(num6);
    num6++;
}

num7 = 0;
for(let i = 0; i < 8; i++){
    if(i === 5){
        continue;//пропускаємо ітерацію з num6=5
    }
    console.log(i);
}

//цикл всередині циклу
for(let i = 0; i < 3; i++){

    console.log(`i = ${i}`);

    for(let j = 0; j < 3; j++){
        console.log(`j = ${j}`);    
    }
}

/*8. Використовуючи властивості рядків (тип string), та регулярний вираз (regular expression) видалити голосні букви зі слова.*/
/*function disemvowel(str) {
    var vowels = ['a', 'e', 'i', 'o', 'u', 'y', 'A', 'E', 'I', 'O', 'U', 'Y'];
    str = for (var i = 0; i < str.length; i++) {
      if (str[i] == for(var j = 0; j < vowels.length; j++)  {
        var letter = vowels[j];
  } ) {
        str[i] = str[i + 1]; 
      }
    } else {
        str[i] = str[i];
    }
  } */


