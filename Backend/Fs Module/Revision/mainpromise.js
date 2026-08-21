import fs from "fs/promises"

let a = await fs.readFile("akshat.txt")

// let b = await fs.writeFile("akshat.txt","\n\n\nthis is a amzing promise")

let c = await fs.appendFile("akshat.txt","\n\nAkshat is a good boy")
console.log(a.toString(),b,c);