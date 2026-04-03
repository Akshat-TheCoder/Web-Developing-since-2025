const fs =  require("fs");
console.log("starting");

// fs.writeFileSync("akshat.txt", "I am akshat")
fs.writeFile("akshat2.txt", "Hello2 !! I am Akshat", ()=>{
    console.log(`Done`);
    fs.readFile("akshat2.txt",(error , data)=>{
        console.log(error , data.toString());
    })
})

fs.appendFile("akshat.txt", "🤦‍♂️",(e,d)=>{
    console.log(d);
})

console.log(`ending`);