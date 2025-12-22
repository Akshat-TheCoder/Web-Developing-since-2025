// const prompt = require("prompt-sync")({ sigint: true });
// let a = prompt("What's your name? ");

san("Akshat");
function san(name) {
    console.log("Hello " + name);
    console.log("hey " + name + " how are you?");
    console.log("Welcome " + name);
    console.log("Have a nice day " + name);
}

// sum(2, 3);
function sum(a, b) {
    // console.log("The sum is " + (a + b));
    return a + b;
}

result = sum(5, 6);
console.log("The result is " + result);

// Arrow Function
const sub = (x) => {
    console.log("This is subtraction function", x);
}

sub(10-5);

// Anonymous Function
const multiply = function (p, q) {
    return p * q;
}
console.log(multiply(2, 3));

// Self Invoking Function
(function () {
    console.log("This is a self invoking function");
})();

// Function inside Object
const obj = {
    name: "Akshat",
    age: 14,    
    print: function () {
        console.log("My name is " + this.name + " and I am " + this.age + " years old.");
    }
}

obj.print();

// Function inside Function
function outer() {
    console.log("This is the outer function");
    function inner() {
        console.log("This is the inner function");
    }
    inner();
}
outer();


{
    let numbers = [];

    for (let i=0; i<5; i++){
        let input = prompt(`Enter number ${i+1}:`);
        let numb = Number(input);
        numbers.push(numb);
    }
    console.log('The numbers you entered are: ', numbers);

    console.log("the average of the  n4umbers is :", average(numbers));

    function average(numbers) {
        let sum = 0;
        for (let num of numbers){
            sum += num;
        }
        return sum / numbers.length;
        }
}