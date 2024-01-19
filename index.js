require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

const student = {
  "name": "John Doe",
  "age": 25,
  "email": "john.doe@example.com",
  "isStudent": false,
  "address": {
    "street": "123 Main Street",
    "city": "Anytown",
    "country": "USA"
  },
  "hobbies": ["reading", "coding", "traveling"],
  "scores": {
    "math": 90,
    "english": 85,
    "history": 75
  }
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
  res.send('kuchbhimingwal')
})

app.get('/login', (req,res) =>{
  res.send('<h1>please login at chai or code</h1>')
})

app.get('/student',(req, res)=>{
  res.json(student)
})
app.get('/youtube', (req,res) => {
  res.send("<h2>Chai or code</h2>")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})