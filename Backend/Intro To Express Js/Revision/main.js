const express = require("express");
const app = express();
const port = 3000;
app.use(express.static('public'));

//app._ _(path,handler)
app.get("/", (req, res) => {
  res.send("Hello 2 World!");
});
app.get("/about", (req, res) => {
  res.send("Hello 2 about!");
});
app.get("/contanct", (req, res) => {
  res.send("Hello contact!");
});
app.get("/blog/:slug", (req, res) => {
  console.log(req.params);
  console.log(req.query);
  res.send(`You don't have a padosi named ${req.params.slug}`);
});
// app.get("/blog/intro-to-a3kshat", (req, res) => {
//   res.send("Akshat!");
// });
// app.get("/blog/intro-to-2akshat", (req, res) => {
//   res.send("Akshat!");
// });
// app.get("/blog/intro-to2-akshat", (req, res) => {
//   res.send("Akshat!");
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
