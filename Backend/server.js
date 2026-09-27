const express=require('express')
const app=express()
require('dotenv').config()
app.use(express.json())
app.get('/',(req,res)=>{
    res.send('hello from server')
})
app.get('/data',(req,res)=>{
    res.json({
        message:'here is data of user'
    })
})
const PORT=process.env.PORT
app.listen(PORT,()=>{
    console.log(`app is listening on ${PORT}`)
})