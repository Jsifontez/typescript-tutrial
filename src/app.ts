import { Invoice } from './classes/invoice.js';

//------------------Interfaces------------------------

/**
 * an interfac allow to create a certain type of structure over an object with
 * we can use it to tell what propeties, what methods or what types of the properties and the return of those methods are
 * this is different from a class because we don't use interefaces to create a new instances we use interfaces to create the structure, like functions
 */
interface IsPerson {
  name: string;
  age: number;
  // in the methods structures doesn't matter the name of the arguments
  speak(a: string): void;
  spend(a: number): number;
}

const me: IsPerson = {
  name: 'shaun',
  age: 30,
  speak(text: string): void {
    console.log(text);
  },
  spend(amount: number): number {
    console.log('I spent ', amount);
    return amount;
  },
};

console.log(me);
me.speak('hello, world');

const greetPerson = (person: IsPerson): void => {
  console.log('hello ', person.name);
}

greetPerson(me);

// ----------Clasess------------

const invOne = new Invoice('mario', 'work on the mario website', 250);
const invTwo = new Invoice('luigi', 'work on the luigi website', 300);

// to assign the type of the classe created we use the name of the class follow by brackets (like an array)
let invoinces: Invoice[] = [];

invoinces.push(invOne);
invoinces.push(invTwo);

console.log(invoinces)
// ---------Type casting----------

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

// -------------------Modules--------------------

/**
 * We can leverage the ecmaScript specification to use modules in TS.
 * To do that we go to the tsconfig.json and change the "module" config to "es2015"
 * And finaly go to the script tag in the html and add the "type" attribute and set it to "module".
 * With that we can import and export the elements that we want it. But when we import we use as '.js' as extension and not '.ts'
 * This is a feature that only modern browser supports
 */
