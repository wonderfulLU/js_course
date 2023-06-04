class Comment{

    constructor(text){
        this.text = text
        this.likesQuantity = 10
    }

    addLike(){ //динамічний метод
        this.likesQuantity += 1
        //this.likesQuantity = this.likesQuantity + 1        
    } 

    static mergeComments(first, second){ //static - створення статичного метода
        //статичні методи НЕ наслідуються екземплярами класу
        //Доступні тільки всередині класу
        return `${first} ${second}` //склеювання двох коментарів
    }
}

let merged = Comment.mergeComments('First commment', 'Second comment') //створення змінної
console.log(merged)

const newComment = new Comment('Some new comment') //створення екземпляру класу

console.log(newComment)

newComment.addLike()

console.log(newComment)

newComment.mergeComments('hgjkjhgfd', '741236584')//неможливо викликати, бо він статичний
//можна виконувати маніпуляції тільки всередині класу
console.log(newComment)

