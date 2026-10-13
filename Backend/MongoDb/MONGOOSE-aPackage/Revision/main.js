import mongoose from "mongoose";
import express from "express";
import { Todo } from "./models/Todo.js";

let conn = await mongoose.connect("mongodb://localhost:27017/newTodo");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  try {
    const todo = new Todo({
      title: "Hey first todo",
      desc: "Description of first todo",
      isDone: false,
      Days: Math.floor(Math.random() * 55 + 5 * Math.random()),
    });
    todo.save();
    console.log("inserted");
  } catch (error) {
    console.error(error);
  }
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
