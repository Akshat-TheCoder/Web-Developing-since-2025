alert("Please concern the console for output.");

{
    // while (input !== null) {
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
        else {
            console.log("You can marry");
            alert("You can marry");
        }
    }
    else {
        console.log("Invalid gender");
        alert("Invalid gender");
        let age = prompt("Enter your age:");
        age = Number(age);
    }
    // }
};
{
    let a = prompt("Enter Your Name");
    document.title = a;
};

{
    let b = prompt("Enter Your Age");
    console.log(`Your Age is ${b}`);
};

{
    let num = 5;
    let input = prompt("Guess the number between 1 to 10");

    while (input !== null) {              // null means user pressed Cancel
        let nump = Number(input);

        if (nump === num) {
            alert("You guessed the correct number");
            console.log("You guessed the correct number");
            break;
        } else if (nump < num) {
            alert("Your guess is too low");
        } else if (nump > num) {
            alert("Your guess is too high");
        } else {
            alert("Please enter a valid number");
        }

        input = prompt("Guess again between 1 to 10");
    }
};