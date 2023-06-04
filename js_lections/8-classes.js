//робити заготовки об'єктів, щоб створювати екземпляри об'єктів

class Comment{ //class - синтаксис класу

    constructor(text){//constructor - -заготована заздалегідь ф-ція в JS, можемо задати властивості класу, описує статичні властивості нашого об'єкта, тобтояк би він мав виглядати
        this.text = text //задаємо властивості класу
        this.likesQuantity = 10
    }

    addLike(){//метод - динамічна властивість об'єкту, що він вміє робити
        //метод - це ф-ція - -яка буде у нашого об'єкту
        this.likesQuantity += 1 //будемо додавати 1 лайк  
        //this.likesQuantity = this.likesQuantity + 1//те саме, що вище
        //метод можна викликати на кожен екземпляр класу
    } 
}

const firstComment = new Comment('firstComment') //створення екземпляру класу

console.log(firstComment)
console.log(firstComment.text)
console.log(firstComment.likesQuantity)

firstComment.addLike(); //викликаємо метод .addLike()

console.log(firstComment)
console.log(firstComment.text)
console.log(firstComment.likesQuantity)

const secondComment = new Comment('secondComment')
const thirdComment = new Comment('thirdComment')

secondComment.addLike();
thirdComment.addLike();
console.log(`secondComment: ${secondComment.likesQuantity}`)
console.log(`thirdComment: ${thirdComment.likesQuantity}`)

secondComment.addLike();
thirdComment.addLike();
console.log(`secondComment: ${secondComment.likesQuantity}`)
console.log(`thirdComment: ${thirdComment.likesQuantity}`)


/*let comment = {
    text: "rurtji",
    likesQuantity: 0
}*/