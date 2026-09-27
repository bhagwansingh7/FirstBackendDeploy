const express=require('express')
const app=express()
require('dotenv').config()
app.use(express.json())
app.get('/',(req,res)=>{
    res.send('hello from server')
})
app.get('/data',(req,res)=>{
    res.json({
        message:'This is first ci/cd application by -BHAGWAN SINGH DHANGAR'
    })
})
app.get('/names',(req,res)=>{
    res.json({
        message:'here is customer names'
    })
})
const PORT=process.env.PORT
app.listen(PORT,()=>{
    console.log(`app is listening on ${PORT}`)
})