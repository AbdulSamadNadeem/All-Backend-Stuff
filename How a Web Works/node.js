const fs = require('fs');
const http = require('http')


const template = fs.readFileSync('./resources/index.html' , 'utf-8')

const server = http.createServer((request , response )=>{
    response.end(template)
    console.log('A request is made')
})

server.listen(8000 , '127.0.0.1' , ()=>{
    console.log('the server is running')
})

