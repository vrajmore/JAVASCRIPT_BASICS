// Operators

// artimetic operator
let a = 5;
let b = 2;

console.log("a + b =", a + b);
console.log("a - b =", a - b);
console.log("a * b =", a * b);
console.log("a / b =", a / b);

// modulus operator
console.log("a % b =", a % b);         //gives you reminder when you divide two values

// exponentiation operator
console.log("a^b=", a ** b);          //gives you a to the power of b

// unary Operator
// increment operator
a = a + 1;                            //adds 1 in the value of a
a++;                                //first uses value of a and increment value [also called as post increment]
++a;                                //first increment value of a and uses the value [also known as pre increment]
console.log(a);

// decrement operator
a = a - 1;                            //subtract 1 in the value of a
a--;                                //first uses value of a and decrement value [also called as post decrement]
--a;                                //first decrement value of a and uses the value [also known as pre decrement]
console.log(a);

// assignment operator [=, +=, -=, *=, %=, **=]
// works from right to left
let c = 10;
c += 4;                             //increment by 4 and stores in c (c = c + 4)
c -= 4;                             //decrement by 4 and stores in c (c = c - 4)
c *= 4;                             //multiply by 4 and stores in c (c = c * 4)
c %= 4;                             //get remainder by 4 and stores in c (c = c % 4)
c **= 4;                            //get c power to 4 and stores in c (c = c ** 4)

// comparision operator [==, !=, >=, >, <=, <]
console.log("a == b", a == b);
console.log("a != b", a != b);
console.log("a > b", a > b);
console.log("a < b", a < b);
console.log("a <= b", a <= b);
console.log("a >= b", a <= b);

// logical operator [&&, || !]

// && AND operator gives output as true if both the conditions are true
// || OR operator gives output as true if any one of the condition is true (returns false if both conditions are false)
// ! NOT operator gives inverts the true to false and false to true 



// Conditional Statments [if-else, switch-case, ]

// if-else
let age = 20;
console.log("age =", age);

if (age < 18) {                       //can also use multiple if statments
    console.log("you can vote");
} else if (age > 80) {
    console.log("you are dead");    //can use else-if to use multiple conditions
} else {
    console.log("you can vote");
}