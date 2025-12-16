var a = 1;
var b = 2;
var c = 3;

console.log(a)
console.log(b + c * a)

// respectival function
{
    var a = 5;
    console.log(a);
}

console.log(a)


var a = 10;
var a = a + 5;
console.log(a);

// var 55a = 20; Invalid variable name

var _name = "John";
var $age = 25;
console.log(_name);
console.log($age);
console.log(typeof _name, typeof $age);

var isStudent = true;
console.log(isStudent);
console.log(typeof isStudent);

var score;
console.log(score);
console.log(typeof score);

var empty = null;
console.log(empty);
console.log(typeof empty);

var firstName = "Jane";
var lastName = "Doe";
var fullName = firstName + " " + lastName;
console.log(fullName);

var x = 10;
var y = 20;
var z = x + y;
console.log("The sum of " + x + " and " + y + " is " + z);

let p = 15;
let of = 25;
console.log(p + x);

// let p = 30; // This will cause an error because 'p' is already declared

{
    let p = 50; // This 'p' is scoped to this block
    let of = 60;
    console.log(p / of);
}

let k = "Hello";
let m = 3.14;
console.log(k + " " + m);

console.log(typeof k, typeof m);

const pi = 3.14159;
console.log(pi);

// pi = 3.14; // This will cause an error because 'pi' is a constant

const greeting = "Welcome!";
console.log(greeting);
// greeting = "Hello!"; // This will cause an error because 'greeting' is a constant