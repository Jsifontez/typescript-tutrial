/**
 * We can work with the DOM in TS like we do in javascript.
 * But there a few differences:
 * If we create a reference to an element of the DOM that is possibly be 'null'
 * TS throw us an error. There are two way to solve that:
 * 1. Create an 'if' statement where we can access to whaterver we want
 * 2. Add an exclamation mark at the end of the assignation. Do this only if you know that that element will exist
 */

// const anchor = document.querySelector('a')!;

// if (anchor) {
//   console.log(anchor.href)
// }

// console.log(anchor.href)

// const form = document.querySelector('form')!; // this is a type of HTMLFormElement
/**
 * when we take an element by his class, TS take that type of Element instead of HTMLFormElement.
 * To avoid that an assign the correct type we can use what is call it 'type casting'
 * basically we assign the type of html element that we're assign it
 * with 'type casting' we can avoid the use of exclamation mark because we never assign 'null'
 * we are assign the 'type casting'
 */
const form = document.querySelector('.new-item-form') as HTMLFormElement;

// inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  console.log(
    type.value,
    tofrom.value,
    details.value,
    amount.valueAsNumber
  )
})