let random = Math.random();
console.log(random);
function faultyCalc() {
    let a = prompt("Enter first number:");
    if (a === null) {
        return [null, null, null];
    }
    let c = prompt("Enter Operation (+, -, *, /):");
    let b = prompt("Enter second number:");
    return [a, c, b];
}
// faultyCalc();
let [a, c, b] = faultyCalc();

console.log("you entered:", a, c, b);

a = Number(a);
b = Number(b);

let obj = {
    "+": "-",
    "-": "+",
    "*": "/",
    "/": "*"
}
const keys = Object.keys(obj);


if (random > 0.2) {
    console.log(`The result is ${eval(`${a} ${c} ${b}`)}`);
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`);
} else if (b == null || c == null || isNaN(a) || isNaN(b)) {
    faultyCalc();
}
else {
    c = obj[c];
    console.log(`The result is ${eval(`${a} ${c} ${b}`)}`);
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`);
}