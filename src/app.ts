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

// ----------Clasess------------

class Invoice {
  /**
   * all the properties created below are public
   * which means that when we create an instance of that class, we can access to all that properties
   * we can change it if we want, after the initial instance of the class
   * to do that we use access modifiers like:
   * 'public': the default value. We can access and modify the property outside the class
   * 'private': We can access to the property inside the function but not outside. Like a 'Class.property'
   * 'readonly': We can read the property from outside and inside but we can't change it
   */
  // readonly client: string;
  // private details: string;
  // public amount: number;

  constructor (
    readonly client: string,
    private details: string,
    public amount: number
  ){}

  format () {
    return `${this.client} owes £${this.amount} form ${this.details}`
  }
}

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