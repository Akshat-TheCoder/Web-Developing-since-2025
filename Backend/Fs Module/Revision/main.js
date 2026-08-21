const fs = require("fs");

console.log(fs);

// fs.writeFileSync("akshat.txt","Akshat is a Hacker")

fs.writeFile("akshat2.txt", "2sAkshat", () => {
  console.log("Done");
  fs.readFile("akshat2.txt", (error, data) => {
    console.log(error, data.toString());
  });
});

fs.appendFile("akshat.txt", "akshatrobo", (e, d) => {
  console.log(d);
});
console.log("ending");
