const express = require('express')
const router = express.Router()

// define the shop route
router.get('/shoppost/:slug', (req, res) => {
    res.send(`Fetch the shop post for ${req.params.slug}`)
})

// define the home page route
router.get('/', (req, res) => {
    res.send('Shop home page')
})

// define the about route
router.get('/about', (req, res) => {
    res.send('About shop')
})


module.exports = router