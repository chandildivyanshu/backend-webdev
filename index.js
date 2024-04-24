require('dotenv').config()
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter' , (req,res) => {
    res.send('hello twitter')
})
app.get('/login' , (req,res) => {
    res.send('<h1>Please login at Chai aur code</h1>')
})

app.get('/youtube' , (req,res) => {
    res.send('<h2> this is youtube </h2>')
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})