const express = require("express");
const router = express.Router();

// Update this relative path if your data folder location differs
const subjects = require("../data/resource"); 

router.get("/", (req, res) => {
  // Always resolves relative to where node is running (project root)
  res.sendFile("Template/Subject.html", { root: process.cwd() }, (err) => {
    if (err && !res.headersSent) {
      console.error("SUBJECT FILE ERROR:", err);
      res.status(500).send(err.message);
    }
  });
});

router.get("/:slug/chapters", (req, res) => {
  const subject = subjects.find(
    (item) => item.slug === req.params.slug
  );

  if (!subject) {
    return res.status(404).json({
      message: "Subject not found"
    });
  }

  res.json({
    subject: subject.name,
    chapters: subject.chapters
  });
});

router.get("/:slug", (req, res) => {
  res.send(`${req.params.slug} is a very good subject`);
});

module.exports = router;