const express = require('express')
const app = express()

app.use(express.static('./public'))
console.log(app.get('env'))

app.listen(8000 , ()=>{
    console.log('server is started')
})