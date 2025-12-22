let a =1;
console.log(a);

console.log("Using for loop to add numbers from 1 to 9 to 1");
for (let i = 1; i < 5; i++) {
    console.log(a + i)
}

console.log("Using For in loop to function on Keys and Elements of an Object");
let emp = {
    "name " : "John",
    "role" : "Developer",
    "company" : "CGD&Sg"
}

for (const key in emp) {
    const element = emp[key];
    console.log(key , ":", element);
    
}

console.log("Using For of loop to function on elements of an Array and String");
for (const c of "AKSHAT") {
    console.log(c);
}

console.log("Using While loop to print numbers from 0 to 4");
let p = 0;
while (p < 5) {
    console.log(p) 
    p++;
}

console.log("Using Do While loop to print numbers from 2 to 4");
let y = 1
let x = y*y+2
do {
    console.log(x)
    x++;
} while (
    x < 5
);


const marks ={
    "Akshat": 95,
    "Rohan": 85,
    "Shreya": 90
}

for (const key in marks) {
    const element = marks[key];
    console.log(key , ":", element);
}

const obj = { harry: 98, rohan: 70, aakash: 7 };

for (let student in obj) {
  console.log(`${student} got ${obj[student]} marks`);
}

