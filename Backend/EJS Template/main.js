const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  let siteName = "Adidas";
  let searchText = "Search Now";
  let arr = [1, 34, 26];
  res.render("index", {
    siteName: siteName,
    searchText: searchText,
    arr,
  });
});

app.get("/blog/:slug", (req, res) => {
  let blogTitle = "Adidas why and When?";
  let blogContent = "It is a very Good Brand";
  res.render("blogpost", {
    blogTitle: blogName,
    blogContent: blogContent,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
