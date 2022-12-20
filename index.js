const express = require('express')
const app = express()

app.get('/home',(req,res) =>{
    res.sendFile(dirname+"/work3/work3.html")
})
app.get('/text.css',(req,res) =>{
    res.sendFile(dirname+"/work3/text.css")
})
app.get('/animated.css',(req,res) =>{
    res.sendFile(dirname+"/work3/animated.css")
})

app.listen(3000,()=> {
    console.log('start sever port[3000]')
})