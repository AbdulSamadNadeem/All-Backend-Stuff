const express = require('express')
const app = express()

const fs = require('fs')
const port = 8000

const Movies = JSON.parse(fs.readFileSync('./data/movies.json'))





app.get('/api/v1/movies/:id' , (req,res)=>{
   const id = Number(req.params.id)

   const Data = Movies.find((item)=> item.id === id)
    
   if(Data){

       res.status(200).json({
           status:"success",
           data:{
               movies:Data
           }
       })
   }
   else{
    res.status(404).json({
        status:"Falied",
        message:"The Value Of Id does not have data"
    })
   }
})











app.listen(port , ()=>{
    console.log('Server Is Started')
})