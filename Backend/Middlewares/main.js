const express = require("express");
const app = express();
const port = 3000;
const fs = require("fs");
//Middleware 1 -- Locker for our aplication
app.use((req, res, next) => {
  console.log(req.headers);
  req.akshat = "I am Akshat";
  fs.appendFileSync("log.txt", `${Date.now()} is a ${req.method}\n`);
  //   res.send("Hacked by Middleware 1");
  console.log(`${Date.now()} is a ${req.method}`);
  next();
});

//Middleware 2
app.use((req, res, next) => {
  console.log("m2");
  next();
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/about", (req, res) => {
  res.send("Hello About!"+req.akshat);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
