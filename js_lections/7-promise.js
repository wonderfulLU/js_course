//ЦЕ ВСЕ ПРО АСИНХРОННІСТЬ
//Promise - результат операції, яка ще не завершена, але буде завершена в визначений період в майбутньому
//набагато ефективніший ніж колбеки, особливо колли більше ніж 2 діїб впорядковує всі дії

//код, який імітує роботу сервера
console.log('Запит даних з серверу...');

setTimeout(() => {
    console.log('підготовка даних для відповіді сервера...');

    const product = {
        name: 'Laptop',
        price: 10000
    }

    setTimeout(() => {
        product.status = 'inStock';
        console.log(product);
    }, 2000)

}, 10000)


const req = new Promise((resolve, reject) => {});
//resolve - виконується, коли дія в Promise виконалась успішно (для цього ф-ція .then)
//reject - виконується,коли дія в Promise виконалась НЕ успішно (для цього ф-ція .catch)
//finally - виконується в будь-якому випадку
//Promise - для синхронізації певних дій

const req2 = new Promise((resolve, reject) => {
    console.log('Запит даних з серверу...');

    setTimeout(() => {
        console.log('підготовка даних для відповіді сервера...');

        const product = {
            name: 'Laptop',
            price: 10000
        }

        setTimeout(() => {
            product.status = 'inStock';
            console.log(product);
        }, 2000)

    }, 10000)
});


const req3 = new Promise((resolve, reject) => {
    console.log('Запит даних з серверу...');

    setTimeout(() => {
        console.log('підготовка даних для відповіді сервера...');

        const product = {
            name: 'Laptop',
            price: 10000
        }

resolve(product); //ф-ція яка приймає параметр

    }, 10000)
});

/*req3.then(() => {    
    console.log('дані отримані');
})*/

req3.then((product) => { //then_потім з req3_ф-ції буде передано в product і далі викорустовуємо + нову властивість і передаємо в консоль
    setTimeout(() => {
        product.status = 'inStock';
        console.log(product);
    }, 2000)
})

//припустимо, що після того, як отримали відповідь з сервера - хочемо зробити ще якісь дії в середині then
const req4 = new Promise((resolve, reject) => {
    console.log('Запит даних з серверу...');

    setTimeout(() => {
        console.log('підготовка даних для відповіді сервера...');

        const product = {
            name: 'Laptop',
            price: 10000
        }

resolve(product); //вказує де і в яких місцях виконається ця ф-ція

    }, 10000)
});

req4.then((product) => {
    const req5 = new Promise ( (resolve, reject) => {
        setTimeout(() => {
            product.status = 'inStock';
            resolve(product);
        }, 2000)    
    })

    req5.then( product => {
        console.log(product);
    })
})


//щоб Promise повертав дані - кінцевий ланцюжок з resolve
const req8 = new Promise((resolve, reject) => {
    console.log('Запит даних з серверу...');

    setTimeout(() => {
        console.log('підготовка даних для відповіді сервера...');

        const product = {
            name: 'Laptop',
            price: 10000
        }

resolve(product);

    }, 10000)
});

req8.then((product) => {
    return new Promise ( (resolve, reject) => {
        setTimeout(() => {
            product.status = 'inStock';
            console.log(product);
        }, 2000)    
    })
    
}).then( product => {
    product.isModified = true;
    return product;
}).then( product => {
    console.log(product)
})


//щоб Promise повертав дані - кінцевий ланцюжок з reject
let error = true; //щоб точно відпрацював reject
const req9 = new Promise((resolve, reject) => {
    console.log('Запит даних з серверу...');

    setTimeout(() => {
        console.log('підготовка даних для відповіді сервера...');

        const product = {
            name: 'Laptop',
            price: 10000
        }

if(error){
    reject(product);//(product) - щоб впевнитись, що не додались поля
    //якщо виконався reject, то всі .then не виконуються, а виконується тільки .catch
}

resolve(product);

    }, 10000)
});

req9.then((product) => {
    return new Promise ( (resolve, reject) => {
        setTimeout(() => {
            product.status = 'inStock';
            resolve(product);
        }, 2000)    
    })
    
}).then( product => {
    product.isModified = true;
    return product;
}).then( product => {
    console.log(product)
}).catch( product => {
    console.log('Error happend')
    console.log(product)
}).finally(() => {
    console.log('Finally')
})