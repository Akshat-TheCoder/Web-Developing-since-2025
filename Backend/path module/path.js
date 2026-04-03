import path from "path";

let myPath = "c:\\Users\\Lenovo\\OneDrive\\Desktop\\web dev\\Web-Developing-since-2025\\Backend\\Import --- Export\\Import.js";

const parsedPath = path.parse(myPath);
console.log(path.dirname(myPath));      // String → works
console.log(path.extname(myPath));      // String → works  
console.log(path.format(parsedPath));   // Object → works
console.log(path.basename(myPath));      // String (not parsedPath) → works

console.log(path.join("c:/" , "program\\akshat.text"));