const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Birds Home page');
});
router.get('/about', (req, res) => {
  res.send('About blog');
});
router.get('/blogpost/:slug', (req, res) => {
  res.send(`fetch the blogpost for ${req.params.slug}`);
});

// mount the router on an app
// app.use('/calendar', router);

module.exports = router