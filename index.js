const express = require('express')
const app = express()

app.get('/home',(req,res) =>{
    res.sendFile(dirname+"/work3/work3.html")
})

app.listen(3000,()=> {
    console.log('start sever port[3000]')
})