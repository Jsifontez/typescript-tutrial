import { Invoice } from './classes/invoice.js';
import { Payment } from './classes/Payment.js';
import { ListTemplate } from './classes/ListTemplate.js';
const me = {
    name: 'shaun',
    age: 30,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log('I spent ', amount);
        return amount;
    },
};
console.log(me);
me.speak('hello, world');
const greetPerson = (person) => {
    console.log('hello ', person.name);
};
greetPerson(me);
// ----------Clasess------------
const invOne = new Invoice('mario', 'work on the mario website', 250);
const invTwo = new Invoice('luigi', 'work on the luigi website', 300);
// to assign the type of the classe created we use the name of the class follow by brackets (like an array)
let invoinces = [];
invoinces.push(invOne);
invoinces.push(invTwo);
console.log(invoinces);
// ---------Type casting----------
// const form = document.querySelector('form')!; // this is a type of HTMLFormElement
/**
 * when we take an element by his class, TS take that type of Element instead of HTMLFormElement.
 * To avoid that an assign the correct type we can use what is call it 'type casting'
 * basically we assign the type of html element that we're assign it
 * with 'type casting' we can avoid the use of exclamation mark because we never assign 'null'
 * we are assign the 'type casting'
 */
const form = document.querySelector('.new-item-form');
// inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// list template instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    // using tuples
    let values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, 'end');
});
// -------------------Modules--------------------
/**
 * We can leverage the ecmaScript specification to use modules in TS.
 * To do that we go to the tsconfig.json and change the "module" config to "es2015"
 * And finaly go to the script tag in the html and add the "type" attribute and set it to "module".
 * With that we can import and export the elements that we want it. But when we import we use as '.js' as extension and not '.ts'
 * This is a feature that only modern browser supports
 */
// ------------------Generics-----------------------
/**
 * generecis allow to reuse certain block of code which can use different types
 * to create a generic we use '<T>''
 * we also can extend the properties of a generic with '<T extends [type]'
 */
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: 'yoshi', age: 40 });
//let docTwo = addUID('shaun'); // throw and error because the generics extend for an object which has the property name
// ------------------Enums------------------------
/**
 * Are a special constants or keywords and associate it with a numeric value
 * it can be a value or another
 */
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTO"] = 3] = "DIRECTO";
    ResourceType[ResourceType["PERSON"] = 4] = "PERSON";
})(ResourceType || (ResourceType = {}));
// resource type is 0, because enum are 0 index elements
const docThree = {
    uid: 1,
    resourceType: ResourceType.BOOK,
    data: { name: 'shaun' }
};
// resource type is 4, because enum are 0 index elements
const docFour = {
    uid: 1,
    resourceType: ResourceType.PERSON,
    data: ['bread', 'milk']
};
// ------------------Tuples-----------------------
/**
 * tuples are like array, it declare with '[]' but the main difference is that each position in
 * the tuple are fixed to be certain type of data
 * but each elements can change to the same type
 */
let tup = ['mario', 42, false];
// tup = 23, 64, true; // throw an error because the first element must be a string and not a number
