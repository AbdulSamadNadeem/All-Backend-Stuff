const express = require('express')
const app = express()

const fs = require('fs')
const port = 8000

app.use(express.json())

const Movies = JSON.parse(fs.readFileSync('./data/movies.json'))


app.delete('/api/v1/movies/:id' , (req,res)=>{
   const id = Number(req.params.id)

   const updatedmovie = Movies.find((item)=> item.id === id)
   
   
   const index = Movies.indexOf(updatedmovie)


   if(updatedmovie){

    Movies.splice(index , 1)
      
    fs.writeFile('./data/movies.json' , JSON.stringify(Movies) , (err)=>{
        res.status(204).json({

            status:"success",
            data:null
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