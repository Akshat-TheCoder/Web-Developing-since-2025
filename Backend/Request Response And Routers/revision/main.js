const express = require("express");
const app = express();
const port = 3000;
const blog = require('./routes/blog')

app.use(express.static("public"));
app.use('/blog',blog)

app.get("/", (req, res) => {
  console.log("its a get request");
  res.send("Hello World!");
});
app.post("/", (req, res) => {
  console.log("its a post request");
  res.send("Hello World! post");
});
app.put("/", (req, res) => {
  console.log("its a put request");
  res.send("Hello World! put");
});
app.delete("/", (req, res) => {
  console.log("its a delete request");
  res.send("Hello World! delete");
});
app.get("/index", (req, res) => {
  console.log("its a index2 file request");
  res.sendFile("temlate/index2.html", { root: __dirname });
});
app.get("/pdf-download", (req, res) => {
  console.log("its a download request");
  res.download("ADMIT CARD IOQM.pdf", { root: __dirname });
});
app.get("/pdf-open", (req, res) => {
  console.log("its a open request");
  res.sendFile("ADMIT CARD IOQM.pdf", { root: __dirname });
});
app.get("/api", (req, res) => {
  console.log("its a download request");
  res.json({ a: 1, b: 2, aa: 3, name: ["Akshat"] });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
