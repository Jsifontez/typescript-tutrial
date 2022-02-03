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
const circ = (diameter: number) => {
  return diameter * Math.PI;
};

console.log(circ(5));
