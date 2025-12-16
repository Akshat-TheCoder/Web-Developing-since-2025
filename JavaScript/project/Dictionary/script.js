{
    let a =prompt("enter your Name");
    alert("Hello " + a + " Welcome to our Dictionary") 
    document.title ="Dictionary of " + a;
    console.log ("Hello " + a + " Welcome to our Dictionary");
}

let dictionary = {
    "apple": "A fruit that is typically red, green, or yellow.",
    "banana": "A long yellow fruit.",
    "cat": "A small domesticated carnivorous mammal.",
    "dog": "A domesticated carnivorous mammal.",
    "elephant": "A large herbivorous mammal with a trunk."
}

console.log(dictionary)

{
    let word = prompt("Enter a word to look up its meaning:");
    if(word in dictionary){
        alert(word + ": " + dictionary[word]);
    } else {
        alert("Sorry, the word '" + word + "' is not in the dictionary.");
    }
}

console.log(Object.keys(dictionary));
console.log(Object.values(dictionary));