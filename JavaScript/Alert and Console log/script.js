alert("hello world");

var a = 5;
var b = prompt("Enter a number:");
var c = confirm("Do you want to proceed?");

if (c) {
    alert("your computer is hacked");
}
else{
    alert("safe");
}

console.log("your number is " + b);
console.log(typeof b);

console.error("This is an error message");
console.warn("This is a warning message");
