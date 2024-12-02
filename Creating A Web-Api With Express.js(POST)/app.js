const express = require('express');
const app = express();
const fs = require('fs');
app.use(express.json());

const movies= JSON.parse(fs.readFileSync('./data/movies.json'))

//This Is a POST API in this the endpoints are /api/v1/movies and http method is POST

app.post('/api/v1/movies',(req,res)=>{

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
    

})

const port = 8000

app.listen(port , ()=>{
    console.log('Server is Started')
})