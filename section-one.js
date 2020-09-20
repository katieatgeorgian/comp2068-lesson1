//Generates random integer between a min and max number (inclusively - includes min and max numbers)
const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + 1);

/*
We can type
whatever
we want between
these two delimiters (i.e opening and closing comment tags)
*/

/**
 * Returns a random integer between a minimum and a maximum number, including the min and max number
 *
 *
 * @param {number} min The starting number in the range
 * @param {number} max The ending number in the range
 * @return {number} The randomly determined integer
 */

function rando(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + 1);
}

// Variables
//Scope decorators: var, let, const

var name = "Katie"; //auto hoisted - no matter where as long as global - attached to global - attached to window - access window.name

if (true) {
  var last = "Hanson"; //still hoisted even in block
}

//only hoisted to most direct - only scoping with function
function varScoping() {
  var youCantSeeMe = "booyay";
}

//let and const are block scoped - within block
if (true) {
  let youGotNothing = "yeppers";
}

//if want to see inside block - accessing but not declaring in block - if did window.youCanSeeMe you'll get undefined b/c not hoisted to window - not available outside file
let youCanSeeMe;
if (true) {
  youCanSeeMe = "How do you do?";
}

//JS constants
const age = 35; //age will always be 35 - can't change primitive variable

//cant assign new value - memory stays persistent
const person = {};
//but can access dot operator and create new property in browser
//immutable bounding ??
//Object.freeze(person) - frozen object - won't allow but won't show error

//Data Types
//Primitives - anything that's not an object (an array is technically object)

const str = "I'm a String"; //String
//typeof pass in variable you want to find variable of - str. - gives methods - calls string constructor - instaniates and returns string object
const num = 5; //Number
const bool = true; //Boolean
//0 is false, 1 is true but 0===false returns false because matching type too
const nil = null; //null means empty - nothing - declared, exists but empty
const undy = undefinied; //does not exist - not occupying space
//symbols are in variables and functions and classes - representation of space in memory

//Objects - include functions and arrays - properties and methods
