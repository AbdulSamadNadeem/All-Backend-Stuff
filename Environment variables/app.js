const dotenv = require('dotenv')
dotenv.config({path:'./config.env'})
const express = require('express')
const app = express()

app.use(express.static('./public'))
console.log(process.env)

const port = process.env.PORT

app.listen(port , ()=>{
    console.log('server is started')
})