// Loops [for, while, do-while]

// for loop
for (let i = 1; i <= 10; i++) {
    console.log("for loop", i);
}

// while loop
// condition will be checked at first (before executing code)
let i = 1;
while (i <= 5) {
    console.log("while loop", i);
    i++;
}

// do-while loop
// condition will be checked last (code will be executed atleast once and then condition will be checked)
let j = 1;
do {
    console.log("do while loop", j);
    j++;
} while (j <= 6);

// for-of loop
let str = "javascript";
for (let val of str) {                                    //"val" willl store each character of str for the loop
    console.log("val =", val);
}

// for-in loop
let student = {
    name: "rahul",
    age: 20,
    cgpa: 8,
    ispass: true,
}
for (let key in student) {                                //"key" will store each key from key-value pair from object
    console.log("key =", key);
}




// Strings
let str1 = "javascript";
let str2 = 'hello1';

// properties of string
console.log(str1.length);                               //used to calculate the length of the string

console.log(str1[7]);                                   //used to get character stored in "str1" at perticular index position

// template literals
let number = 50;
let literal = `this is template literal ${number}`      //used to embed numeric values in the string directly
console.log(literal);

// escape characters
console.log("hey \nwill print in next line");           //"\n" used to print string in next line
console.log("this will give \t tab space")              //"\t" used to get tab space in the line

// string methods
let abc = "    HEY abc    ";
console.log(abc.toUpperCase());                         //used to get all string in uppercase
console.log(abc.toLowerCase());                         //used to get all string in lowercase
console.log(abc.trim());                                //used to remove starting and ending white spaces from a string (spaces inbetween strings are not removeds )

console.log(str1.slice(3, 7));                           //to get value from string between given to index positions
console.log(str1.concat(str2));                         //adds two strings
console.log(abc.replace("abc", "xyz"));                 //replaces anotheer string with the given part of string
//also has replaceall to replace with all matching strings
console.log(str1.charAt(7));                            //gives character at given index value