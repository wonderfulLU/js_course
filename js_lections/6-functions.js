anonimFunc



const myRequestWithDate = (field1, timestamp = Date()) =>{
    let requestBody = {
        someData: 1,
        someData2: 2,
        timestamp: ''
    }
    requestBody.someData = field1;
    requestBody.timestamp = timestamp;

    return requestBody;
}

console.log(myRequestWithDate('werwer', '1231254'));
console.log(myRequestWithDate('hjhfhgfd'));

const playWithReturnFunc = () => {
    for(let i = 0; i < 8; i++){
        console.log(i);
        if(i === 6){
            return 'return as a break'
        }
    }
}

console.log(playWithReturnFunc());

function first(){
    console.log('First')
}

first();

function someFunc(){
    console.log('hello')
}
setTimeout(someFunc, 5000)


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


    function som
