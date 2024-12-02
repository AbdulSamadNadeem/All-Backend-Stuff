const express = require('express')
const app = express()

const fs = require('fs')
const port = 8000


// this is a custom MiddleWares
const cusMw = (req , res, next)=>{
    console.log('middle Ware is Executed')
    req.requestedAt = new Date().toISOString();
    next()
}

app.use(express.json())
app.use(cusMw)


const movies = JSON.parse(fs.readFileSync('./data/movies.json'))

const deleteReq = (req,res)=>{
    const id = Number(req.params.id)
 
    const updatedmovie = movies.find((item)=> item.id === id)
    
    
    const index = movies.indexOf(updatedmovie)
 
 
    if(updatedmovie){
 
     movies.splice(index , 1)
       
     fs.writeFile('./data/movies.json' , JSON.stringify(movies) , (err)=>{
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
 }

const patchReq  = (req,res)=>{
    const id = Number(req.params.id)
 
    const updatedmovie = movies.find((item)=> item.id === id)
    
    
    const index = movies.indexOf(updatedmovie)
 
 
    const UpadtedMovieObj = Object.assign(updatedmovie , req.body)
 
    movies[index] = UpadtedMovieObj
 
     
    if(updatedmovie){
       
     fs.writeFile('./data/movies.json' , JSON.stringify(movies) , (err)=>{
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
 }

const postReq  = (req,res)=>{

    const newID = movies[movies.length - 1].id  + 1
    const newObj = Object.assign({id:newID} , req.body)
    movies.push(newObj)

    fs.writeFile('./data/movies.json' , JSON.stringify(movies) , (err)=>{
              res.status(201).json({
                      status:"success",
                      data:{
                        movies:movies
                      }
              })
    })
    

}

const getAllReq = (req,res)=>{
    res.status(200).json({
     status:"success",
     time:req.requestedAt,
     data:{
        movies:movies
     }
    })
 }


app.get('/api/v1/movies' , getAllReq) 
app.post('/api/v1/movies' , postReq) 
app.patch('/api/v1/movies/:id' , patchReq) 
app.delete('/api/v1/movies/:id' , deleteReq) 


app.listen(port , ()=>{
    console.log('Server Is Started')
})