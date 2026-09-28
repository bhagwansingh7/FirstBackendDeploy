const express = require('express')
const app = express()
const pool=require('./config/db')
require('dotenv').config()

app.use(express.json())

app.get('/', (req, res) => {
    res.send('hello from server')
})

app.get('/by', (req, res) => {
    res.json({
        message: 'This is first ci/cd application by -BHAGWAN SINGH DHANGAR'
    })
})

app.get('/home', (req, res) => {
    res.send(`
        <h1>Home Page of our application</h1>
    `)
})

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`app is listening on ${PORT}`)
})