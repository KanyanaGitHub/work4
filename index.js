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
app.get('/charactorPV',(req,res) =>{
    res.sendFile(dirname+"/work3/page1.html")
})
app.get('/about',(req,res) =>{
    res.sendFile(dirname+"/work3/page2.html")
})
app.get('/01.png',(req,res) =>{
    res.sendFile(dirname+"/work3/01.png")
})
app.get('/02.png',(req,res) =>{
    res.sendFile(dirname+"/work3/02.png")
})
app.get('/03.png',(req,res) =>{
    res.sendFile(dirname+"/work3/03.png")
})
app.get('/04.png',(req,res) =>{
    res.sendFile(dirname+"/work3/04.png")
})


app.get('*',(req,res) =>{
    res.sendFile(__dirname+"/404NF.png")
})

app.listen(3000,()=> {
    console.log('start sever port[3000]')
})