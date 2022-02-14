"use strict";
/**
 * here we can use the same code as javascript but it need to be compiled
 * to be compiled we use the command
 * 'tsc [fileToCompile].ts [fileToPutTheCompileCode].js'
 * To listen every change of the file we use:
 * 'tsc [fielToCompile].ts -w
 */
/**
 * TypeScript uses some inference or it infers in the value
 * assigned to the variable to assgin the type
 * with that we don't need to specify the type of every variable
 */
let character = 'mario';
let age = 30;
let isBlackBelt = false;
// due that typescript use strict types we can't assign a number to a string variable
// character = 30;
// age = 'yoshi';
// isBlackBelt = 'yes';
character = 'luigi';
age = 40;
isBlackBelt = true;
/**
 * We can define what type of variable we can past to a function as argument
 * to do that we use a color ':' and then write the type of variable
*/
const circ = (diameter) => {
    return diameter * Math.PI;
};
console.log(circ(5));
// arrays
// this create a array of only strings
let names = ['luigi', 'mario', 'joshi'];
// we can't do this to names array
// names.push(0);
// names[0] = true
// creating an array with just numbers
let numbers = [10, 20, 50, 40];
// we can do
numbers.push(25);
// we can't do
// numbers.push('juan');
// numbers[0] = false
/**
 * to create and array with differents types we need to initilize
 * that array with the types that we want in it
 */
let mixed = ['yoshi', 12, 'fire', 25];
// we can do
mixed.push('ryu');
mixed.push(10);
mixed[0] = 3;
// we can not change the type of the variable assign it
// mixed = 'arrage';
// numbers = 24;
// objects
/**
 * here each property of the object is like a variable
 * we can't change a type of variable
 * at the same time the word variable assign it with the object
 * can not change type. But we can assign a new object with the same structure
 * once we create an object we can't add another property
 * with `Object.newProperty`
 */
let ninja = {
    name: 'mario',
    belt: 'balck',
    age: 30
};
// we can do with objects properties
ninja.age = 25;
ninja.name = 'camila';
// we can't
// ninja.age = '13';
// ninja.skills = ['fighting', 'sneaking'];
// we can't change the structure of the object
/**
 * ninja = {
 * name: 'luigi',
 * belt: 'white',
 * // age: 35
 * }
 */
// -----------------------------------------------------------
// explicit types: initialize a variable type to be able to assign value in the future
let char;
let ageN;
let isLoggedIn;
// we can do
char = 'ar';
ageN = 12;
isLoggedIn = false;
// arrays: we need to initialize the value of the array with and empty array. If not, it give us an error
let newNinjas = [];
newNinjas.push('camile');
// union types: A way to tell that the value can recieve multiple one type or another
let newMixed = [];
newMixed.push('yoshi');
newMixed.push(20);
// newMixed.push(false); // it give us an error
// we can use union types with normal variables. Here we don't need to use parenthesis
let uid;
uid = '123';
uid = 123;
// objects
let ninjaOne;
ninjaOne = { name: 'mario', age: 30 };
// declare a specific structure for the object
let ninjaTwo;
ninjaTwo = {
    name: 'shaun',
    age: 34,
    beltColor: 'orange'
};
// --------------------------------------------------
// any type: We can create a variable that can change all type of values
let anyAge = 25;
anyAge = true;
anyAge = 'hello';
anyAge = { name: 'luigi' };
// we can use any with arrays
let anyMixed = [];
anyMixed.push(5);
anyMixed.push('mario');
anyMixed.push(false);
//we can use any with objects
let anyNinja;
anyNinja = { name: 'yoshi', age: 25 };
console.log(ninja);
anyNinja = { name: 25, age: 'yoshi' };
console.log(ninja);
// -----------------functions--------------------
/**
 * we can let create a variable that only take function
 */
let greet;
// greet = 'hello' // throw an error
greet = () => {
    console.log('hello there');
};
/**
 * to add an optional parameter we add a '?' sign before to specify the type of the argument.
 * if we don't pass any value to that argument, it take the value of undefined:
 * c?: number | string
 */
const add = (a, b, c = 10) => {
    console.log(a + b);
    console.log(c);
};
add(5, 10);
/**
 * we can explicitly specify the return type. This is done by writing a colon after the arguments of the function
 * if we don't specify it TS can infer with the return value
 * a return type of void it means that the function doesn't return anything
 */
const minus = (a, b) => {
    return a - b;
};
let result = minus(10, 7);
