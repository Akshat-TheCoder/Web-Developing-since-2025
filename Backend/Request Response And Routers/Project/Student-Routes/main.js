const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

const Subjects = require("./routes/Subject");

app.use("/subjects", Subjects);

// { root: process.cwd() } uses your working project folder directly
app.get("/", (req, res) => {
  res.sendFile("Template/Home.html", { root: process.cwd() }, (err) => {
    if (err && !res.headersSent) {
      console.error("SEND FILE ERROR:", err);
      res.status(500).send(err.message);
    }
  });
});

app.get("/about", (req, res) => {
  res.sendFile("Template/About.html", { root: process.cwd() });
});

app.get("/home", (req, res) => {
  res.sendFile("Template/Home.html", { root: process.cwd() });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});