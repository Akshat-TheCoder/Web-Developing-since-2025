let a = [23, 56, 234, 234, 45, 345, 36, 46, 3, 64, 3, 5, 5, 7, 4, 4, 7];

let b = [];
let freq = {};
const DoubleOnce = new Set();

for (const elem of a) {
    freq[elem] = (freq[elem] || 0) + 1;
}

for (const elem of a) {
    if (freq[elem] === 1) {
        b.push(elem * 2);
    } else if (!DoubleOnce.has(elem)) {
        if (Math.random() < 0.5) {
            b.push(elem * 2);
        } else {
            b.push(elem);
        }
    } else {
        b.push(elem);
    }
}
console.log(b);

//

let d = [1, 5, "Akshat", "e", 34];
let e = d + d.reverse();
console.log(`${e}`);


//password checker

function CheckPass(e) {
    if (e.length < 8) {
        console.log(`Your Password should be greater than 8 digits`);
    } else if (!(/[A-Z]/.test(e))) {
        console.log(`Your Password Should contain A Uppercase`);
    } else if (!/[a-z]/.test(e)) {
        console.log(`Your Password should contain a Lowercase`);
    } else if (!/[0-9]/.test(e)) {
        console.log(`Your password should contain a digit`);
    } else if (!/[!@#$%^&*(),.?\/<>;"':[\]{}_\-=`~]/.test(e)) {
        console.log(`Your Password should contain a Special Character`);
    } else {
        console.log(`Your Password is Strong`);
    }
}
CheckPass("Akshat3e4fr!@#(,g");

//vowel counter

function VowelCount(str) {
    let count = 0;
    for (const Character of str) {
        if ("aeiouAEIOU".includes(Character)) {
            count++;
        }
    }
    console.log(count);
}

VowelCount("rangullivedugopalaaiyara");

// Sum Selector : Stops when Encounters a negative 

function SumSelectoe(arr) {
    let sum = 0;
    for (const num of arr) {
        if (num < 0) {
            break;
        }
        sum += num;
    }
    console.log(sum);
}

SumSelectoe([1, 4, 5, -6, 7, 8]);

//Await  multiply

async function MultiAwait(n) {
    for (let i = 0; i < n.length; i++) {
        await new Promise(resolve => {
            setTimeout(() => {
                let x = n[i] * 2;
                console.log(`${x}`);
                resolve();
            }, 500);
        })
    }
}

await MultiAwait([2, 4, 6, 8, 10]);

//Shopping cart value

let prices = {
    "apple": 100,
    "shirt": 600,
    "jeans": 1200,
    "toy": 400,
    "penicil": 5,
    "pen": 10
}

function CartValue(cart) {
    let total = 0;
    for (const item of cart) {
        if (prices[item]) {
            total += prices[item];
        } else {
            console.log(`${item} is not available in our Store`);
        }
    }
    console.log(`${total}`);
}

CartValue(["apple", "toy", "pencil", "shirt", "apple", "pen", "bag", "laptop", "shirt", "jeans", "pencil", "shirt"]);