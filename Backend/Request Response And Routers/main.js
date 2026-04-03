const express = require('express')
const blog = require('./routes/blog')
const shop = require('./routes/shop')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('He! Its a get requet')
})

app.post('/', (req, res) => {
    console.log('Hey! Its a post requet [for terminal]');
    res.send('Hey! Its a post requet')
})

app.put('/', (req, res) => {
    console.log('Hey! Its a put requet [for terminal]');
    res.send('Hey! Its a put requet')
}).delete('/', (req, res) => {  // This is called Chainingt of Request
    console.log('Hey! Its a delete requet [for terminal]');
    res.send('Hey! Its a delete requet')
})

app.get('/index', (req, res) => {
    res.sendFile('Templates/index2.html', { root: __dirname })
})

app.get('/api', (req, res) => {
    res.json({ a: 1, g: 56, g: "fvf", f: true, name: ["akshat", "saumya", "somu"] })
})

app.use(express.static("public"))  // Now only for /file.ext
app.use('/blog', blog)
app.use('/shop', shop)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})