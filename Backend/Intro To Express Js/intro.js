const express = require('express')
const app = express()
const port = 3000

app.use(express.static( 'public'))


app.get('/',(req,res)=>{
  res.send(`hello!!`)
})

app.get('/blog/:slug', (req, res) => {
  // logic to fetch {slug} from the db
  // For the url http://localhost:3000/blog/intro-to-the-world-of-creation?coder=akshat&hacker=anonymous
  console.log(req.params); // will output { slug: 'intro-to-the-world-of-creation' }
  console.log(req.url); // will output /blog/intro-to-the-world-of-creation?coder=akshat&hacker=anonymous
  console.log(req.query); // will output { coder: 'akshat', hacker: 'anonymous' }
  res.send(`hey ${req.params.slug}`)
})


// app.get('/about', (req, res) => {
//   res.send('Welcome to the about page')
// })
// app.get('/contact', (req, res) => {
//   res.send('welcome to the contact page')
// })
// app.get('/about/people', (req, res) => {
//   res.send('welcome to the contact/people page')
// })


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
