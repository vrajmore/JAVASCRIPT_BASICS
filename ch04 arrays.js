// Arrays

let arr = [10, 389, 47, 47, 37];                                            //array created
console.log(arr);
console.log(arr[3]);                                                    //to access or get specfic value of array at specfic index position

// array properties
console.log(arr.length);                                                //to get length of array

// looping over array
// to get all the elements of array using for loop
let heros = ["superman", "spiderman", "ironman", "shaktiman", "batman"];

for (let i = 0; i < heros.length; i++) {
    console.log(heros[i]);
}

// array methods
let food = ["potato", "apple", "litchi", "tomato", "chocolate"];            //array created

// push() method
food.push("chips");                                                     //used to add item in the end of array
console.log("after push ", food);

// pop() method
food.pop();
console.log("after pop", food);                                          //used to remove item from the end of array

console.log(food.toString());                                           //".tostring()" is used to convert any datatype to string

// concat() method
let alph = ["A", "b", "c", "d"];
let num = ["1", "2", "3", "4", "5", "6", "7", "8"];

console.log(alph.concat(num));                                          //combined two strings to gether

// unshift() method
food.unshift("burger");
console.log("after unshift", food);                                      //used to add item in the starting of array

// shift() method
food.shift();                                                           //used to remove item from the starting  of array
console.log("after shift", food);

// slice() method
console.log(food.slice(2, 4));                                           //gives array items from given starting index to ending index

// splice() method to replace                                           //item.splice(index, no_items_to_delete, newitem_to_add);
num.splice(2, 2, 103, 104);                                                //it will remove two elements at index 2 and add new two elements from index postion 2
console.log(num);

// splice() method to add
num.splice(1, 0, 101);                                                    //it will remove zero item at index 1 and add new item to the index position(only used to add item not to remove)
console.log(num);

// splice() method to delete
num.splice(7, 1);                                                       //it will delete one item from index 7
console.log(num);
