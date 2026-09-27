const express=require('express')
const app=express()
require('dotenv').config()
app.get('/',(req,res)=>{
    res.send('hello from server')
})
const PORT=process.env.PORT
app.listen(PORT,()=>{
    console.log(`app is listening on ${PORT}`)
})