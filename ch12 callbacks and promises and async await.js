// Asynchronous

function hello () {                                     //created a simple function
     console.log("hello");
}

// (one > two > hello > three > four) even if it is written in sequence, hello will be executed atlast as it takes more time
console.log("one");
console.log("two");

setTimeout(hello,3000);                                 //settimeout is used to create a delay (in this case delay of 3seconds to execute hello method)

console.log("three");
console.log("four");

// callbacks (argument passsing to another function)

function sum(a,b){                                      //created sum function
    console.log("sum is =",a+b);
}
function multiply(a,b){                                 //created multiply function
    console.log("multiply is =",a*b);
}
function calculator(a,b, oper){                         //created calculator function and passing other function as parameter
    oper(a,b);
}

calculator(10,15, multiply);                            //calling multiply function in calculator function 
calculator(10,15, sum);                                 //calling sum function in calculator function


// Promises (promise is for completion of task)

let promise = new Promise((resolve, reject) =>{         //promise is created with a function as a callback init with 2 parameters(resolve and reject)
    console.log("this is a promise data");
    resolve("promise has been resolved");               //resolve is used when the task is completed
    reject("promise has been rejected");                //reject is used when the task is not completed
});

console.log(promise);                                   //used to print state of promise


// Async function (async function by default returns a promise)

async function hello1(){                                //created a async function (by default returns a promise)
    console.log("hello from async function");
}

console.log(hello1());                                  //hello function is called and returns a promise(will be seen in console window)

// await function (stop execution of processes until perticular task completes), (can only be used in async function)

function api(){                                         //function is created
    return new Promise((resolve, reject) =>{            //promise is created
        setTimeout(()=>{                                //delay is created of 2 seconds
            console.log("Weather data is here");
            resolve("404");
        },2000);
    });
}

async function getweatherdata(){                        //async function to use await
    console.log("getting data 1")
    await api();                                        //await will stop execution of all function in this perticular function
    console.log("getting data 2")
    await api();                                        //after completing of first await this will be executed
}
console.log(getweatherdata());                          //getweather function is called

// IIFI (immediatly invoked function expressions), used to created function which is invoked by it self once and get destroyed

(async () => {                                          //async function is created using IIFE
    console.log("getting data 1");
    await api();
    console.log("getting data 2");
    await api();
    console.log("getting data 3");
    await api();
    console.log("getting data 4");
    await api();
})();                                                   //no need to call this function as it is called here(it will be destroyed from memory after execution)
