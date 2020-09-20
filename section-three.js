//Concat and string templates

const first = "Katie";
const last = "Hanson";
const con = "My name is " + first + " " + "last"; //act of combining of two variables (not two + - concatenates in order two at a time)

const strTmp = `My name is ${first} ${last}`; //can use single and double quotes within - downside is cost - strings are evaluated every time - microns of computing

console.log(`I AM ${first.toUpperCase()}`); //can use functions, ifs inside ${}

//conditional
const time = 7;
if (time < 7) {
  console.log("Cruising along");
} else {
  console.log("Still working");
}

//Ternary - evaluate condition, state what happens true, what happens false
const message = time < 7 ? "Cruising" : "still working";
console.log(message);

//implicit returns
let age = 36; //will evaluate to false if null or undefined
if (age) console.log(age);
else console.log(35);

//if true shows age - if false then will log out 35
console.log(age || 35);

console.log((age && first) || 35); //if age is set and first set will show first -if not 35
