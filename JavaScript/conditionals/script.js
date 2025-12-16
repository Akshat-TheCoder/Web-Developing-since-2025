alert("Please concern the console for output.");

let gender;
do {
    gender = prompt("Enter your gender (male/female):").toLowerCase().trim();
    if (gender !== "male" && gender !== "female") {
        alert("Please enter only 'male' or 'female'");
        gender = prompt("Enter your gender (male/female):").toLowerCase().trim();
    }
} while (gender !== "male" && gender !== "female");

console.log(`Your gender is ${gender}`);

let age = prompt("Enter your age:");
age = Number(age);

if (gender === "male") {
    if (age < 21) {
        console.log("You cannot marry");
        alert("You cannot marry");
    }
    else {
        console.log("You can marry");
        alert("You can marry");
    }
}
else if (gender === "female") {
    if (age < 18) {
        console.log("You cannot marry");
        alert("You cannot marry");
    }
    else{
        console.log("You can marry");
        alert("You can marry");
    }
}
else {
    console.log("Invalid gender");
    alert("Invalid gender");
}

{
    let a = prompt("Enter Your Name");
    document.title = a;
}

{
    let b = prompt("Enter Your Age");
    console.log(`Your Age is ${b}`);
}