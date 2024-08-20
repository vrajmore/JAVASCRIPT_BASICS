// Functions

// creating function
function myfunction() {                                              //created function named as myfunction using function keyword
    console.log("helllo");                                          //this is block of code performed, written between curly braces{}
    console.log("welcome to the world");
}

myfunction();                                                       //called or invoked the function by its name

// creating function with input
function inputfunction(name) {                                       //creating function with input parameter to work with(can also take multiple inputs as parameters)
    console.log("hello", name);                                      //used that parameter to print it 
}

inputfunction("rahul");                                             //called the function and passing an argument to print


// creating sum function to calculate sum of two numbers
function sum(num1, num2) {                                           //can also take multiple inputs as parameter
    let total = num1 + num2;
    return total                                                    //can use return to get result/output from function
}
let result = sum(5, 8);                                              //can also pass multiple arguments and it is stored in result (as return is used in function)
console.log("sum is", result);

//foreach method in arrays(foreach loop is also a higher_order_function)
let arr = [1,2,3,4,5,6];                                            //simple array created

arr.forEach((val, ind, arr) => {                                    //consist of three parameters in sequence (value, index, whole array)
    console.log("value =",val,"index =",ind,"array =",arr);         //can check out puts of all three parameters in this
});

// filter method in array
console.log("filter method in array");

let newarr = arr.filter((val) => {                                  //used to perform action on each element of array(return a new array)
    return val;                                                     //does not change the orignal array
});
console.log(newarr);

// reduce method in array                                           //takes multiple values as input and gives single output
console.log("reduce method in array");

let arrsum = arr.reduce((res,curr) => {                             //has two parameters (previous value and current value)
    return res + curr;
});
console.log(arrsum);