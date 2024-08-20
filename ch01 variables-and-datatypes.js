console.log("Hello to java script");
alert("hello world");                           //alert is used to show a popup message in browser
let promt = prompt("enter a value");            //prompt us used to show a popup message and take a input in browser from popup menu


// variables and data types
// let variables can be changed or overwritten
let age = 24;                                   //datatype number
let name = "abcd";                              //datatype string
let price = 12.50;                              //datatype number
let x = null;                                   //datatype object
let y = undefined;                              //datatype undefined
let isfollow = true;                            //datatype boolean
let a = BigInt("123");                          //datatype bigint
let b = Symbol("Hello!")                        //datatype symbol

const PI = 3.14;                                //const cant not be changed later, it is fixed, we use captial letters for constant


// getting output of variables

console.log(age);                               //console.log is used to show output on console window
console.log(name);
console.log(price);
console.log(x);
console.log(y);
console.log(isfollow);
console.log(PI);


// nonprimitive datatypes
// array and objects

// objects      
// objects are collection of key-value pair
let student = {
    name: "rahul kumar",
    age: 20,
    cgpa: 8.2,
    ispass: true,
};
console.log(student);
// multiple ways to print key from object
console.log(student.name);
console.log(student["name"]);


// arrays
let fruit = ["apple", "mango", "strawberry"];
console.log(fruit);
console.log(fruit[2]);

fruit.push("orange");                           //add the element at the last of array
console.log(fruit);

fruit.pop();
console.log(fruit);                             //removes the last element from the array