const express = require('express')
const fs = require('fs')
const app = express()

const port = 3000

const movies = JSON.parse(fs.readFileSync('./data/movies.json'))

// this is a get api with endpoint /api/v1/movies anf http method GET
app.get('/api/v1/movies' , (req,res)=>{
   res.status(200).json({
    status:"success",
    data:{
       movies:movies
    }
   })
})
app.listen(port , ()=>{
    console.log('server is started')
})