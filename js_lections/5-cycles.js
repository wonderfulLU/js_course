//для повторення циклів тестування, перебору данних
//пройтись декілька разів по сценаріям

//while
let num = 50;
while(num < 90){
    console.log(num); //infinite loop
}

let num1 = 80;
while(num1 < 90){
    console.log(num1);
    num1++;//збільшення наступного числа на 1
}

//do - while
let num2 = 80;
do{
    console.log(num2);
    num2++;
}while(num2 < 90)

//for
for(let i = 1; i < 8; i++){
    console.log(i)//i -->>--iterator
}

num3 = 10;
for(let i = 1; i < 8; i++){
    console.log(num3)//i -->>--iterator
    num3++;
}

num4 = [1, 2, 3, 4];
for(let i = 0; i < num4.lenght; i++){
    console.log(num4);
    num4++;
}

num5 = 10;
for(let i = 0; i <= 0; i--){
    console.log(num5);
    num5++;
}

//коли треба зупинити виконання циклу при певних умовах
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

    for(let j = 0; j < 4; j++){
        console.log(`j = ${j}`);    
    }
}

/*8.*  Використовуючи властивості рядків (тип string), та регулярний вираз (regular expression) видалити голосні букви зі слова.*/
function disemvowel(str) {
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
  }


