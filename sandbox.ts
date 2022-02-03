/**
 * here we can use the same code as javascript but it need to be compiled
 * to be compiled we use the command
 * 'tsc [fileToCompile].ts [fileToPutTheCompileCode].js'
 * To listen every change of the file we use:
 * 'tsc [fielToCompile].ts -w
 */

const character = 'luigi';
console.log(character);

const inputs = document.querySelectorAll('input');
console.log(inputs);

inputs.forEach(input => {
  console.log(input);
});
