//this is the entry point
const express = require('express')
const app = express()




app.get('/' , (req,res)=>{
    res.send("hello from the express server!")
})




app.listen(8000 , ()=>{
    console.log("the server is started")
})
