import fs from "fs/promises"

let a = await fs.readFile("akshat.txt")
let b = await fs.appendFile("akshat.txt", "\n\n\nThis is amazing promise")

console.log(a.toString(),b);