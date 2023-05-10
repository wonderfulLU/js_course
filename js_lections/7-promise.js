//ЦЕ ВСЕ ПРО АСИНХРОННІСТЬ
//Promise - результат операції, яка ще не завершена, але буде завершена в визначений період в майбутньому


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
//resolve - коли дія в Promise виконалась успішно
//reject - коли дія в Promise виконалась НЕ успішно
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

resolve(product); //ф-ція яка приймає рараметр

    }, 10000)
});

/*req3.then(() => {    
    console.log('дані отримані');
})*/

req3.then((product) => {
    setTimeout(() => {
        product.status = 'inStock';
        console.log(product);
    }, 2000)
})


const req4 = new Promise((resolve, reject) => {
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

req4.then((product) => {
    const req5 = new Promise ( (resolve, reject) => {
        setTimeout(() => {
            product.status = 'inStock';
            console.log(product);
        }, 2000)    
    })

    req5.then( product => {
        console.log(product);
    })
})



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

    req5.then( product => {
        console.log(product);
    })
}).then( product => {
    product.isModified = true;
    return product;
}).then( product => {
    console.log(product)
})


let error = false;
const req9 = new Promise((resolve, reject) => {
    console.log('Запит даних з серверу...');

    setTimeout(() => {
        console.log('підготовка даних для відповіді сервера...');

        const product = {
            name: 'Laptop',
            price: 10000
        }

if(error){
    reject(product);
}

resolve(product);

    }, 10000)
});

req9.then((product) => {
    return new Promise ( (resolve, reject) => {
        setTimeout(() => {
            product.status = 'inStock';
            console.log(product);
        }, 2000)    
    })

    req5.then( product => {
        console.log(product);
    })
}).then( product => {
    product.isModified = true;
    return product;
}).then( product => {
    console.log(product)
}).catch( (product) => {
    console.log('Error happend')
    console.log(product)
}).finally(() => {
    console.log('Finally')
})