import mongoose from "mongoose";
import express from "express";
import { Todo } from "./models/Todo.js";

let conn = await mongoose.connect("mongodb://localhost:27017/todo");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  // const todo = new Todo({title : 23, desc : true, isDone : 3, days : "Akshat"}) // WRONG DATA TYPE
  const todo = new Todo({
    // title : "1",
    desc: " It is a Akshat's Todo",
    isDone: false,
    days: Math.floor(Math.random() * 657) + 6,
  }); // cORRECT
  todo.save();
  res.send("Hello World!");
});

app.get("/a", async (req, res) => {
  let todo = await Todo.findOne({});
  res.json({ title: todo.title, desc: todo.desc });
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
