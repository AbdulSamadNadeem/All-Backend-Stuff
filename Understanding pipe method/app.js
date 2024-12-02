const http = require('http')
const fs = require('fs')

const server = http.createServer()

server.on('request' , (req , res)=>{
    const rs = fs.createReadStream('./Files/large-file.txt')
    rs.pipe(res)
})

server.listen(8000 , '127.0.0.1' , ()=>{
    console.log('Server is Started')
})