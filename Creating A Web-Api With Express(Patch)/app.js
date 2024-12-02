const express = require('express')
const app = express()

const fs = require('fs')
const port = 8000

app.use(express.json())

const Movies = JSON.parse(fs.readFileSync('./data/movies.json'))


app.patch('/api/v1/movies/:id' , (req,res)=>{
   const id = Number(req.params.id)

   const updatedmovie = Movies.find((item)=> item.id === id)
   
   
   const index = Movies.indexOf(updatedmovie)


   const UpadtedMovieObj = Object.assign(updatedmovie , req.body)

   Movies[index] = UpadtedMovieObj

    
   if(updatedmovie){
      
    fs.writeFile('./data/movies.json' , JSON.stringify(Movies) , (err)=>{
        res.status(200).json({
            status:"success",
            data:{
                movies:UpadtedMovieObj
            }
        })
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