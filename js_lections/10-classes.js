//можливість наслідування одним класом інший
class Parent{ //клас, який будем наслідувати

    constructor(name, age){ //властивості класу
        this.firstName = name //змінна властивість
        this.lastName = "Lushkova" //незмінна властивість
        this.age = age
}

    greeting(){
        console.log('Hey')
    }

    tellName(){
        console.log(`My name is ${this.firstName} ${this.lastName}`)
    }

    tellAge(){
        console.log(`My age is ${this.age}`)
    }

    tellJobTitle(){
        if(this instanceof Child){  //щоб у чілда не було якоїсь ф-ції, то пишемо
    console.log(`I don't have job title`)//якщо чайлд, то такий текст
        }else{
        this.job = "QA"
        console.log(`My job title is ${this.job}`) //в усіх інших випадках
    }
}

}

class Child extends Parent { //extends - створення класу, який наслідує властивості Parent
    greeting(){
        console.log(`Hey! It's a new greeting`)
    }

    goToSchool(){ //унікальний для чайлда і недоступний для парента
        console.log(`I like to go to school`)
    }
}

const nastya = new Parent('Nastya', 12); //викликаємо класи
const sofia = new Child('Sofia', 6)

nastya.greeting(); //застосовуємо методи
nastya.tellName();
nastya.tellAge();
nastya.tellJobTitle();
console.log(nastya) //викликаємо парент

console.log('______________________')

sofia.greeting();
sofia.tellName();
sofia.tellAge();
sofia.tellJobTitle();
sofia.goToSchool();
console.log(sofia) //викликаємо чайлд




