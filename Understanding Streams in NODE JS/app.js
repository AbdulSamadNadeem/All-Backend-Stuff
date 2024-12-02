const http = require('http')
const fs = require('fs')

const server = http.createServer()

server.on('request' , (req, res)=>{
    console.log('a request is made to the server')
    const rs = fs.createReadStream('./Files/large-file.txt')
    rs.on('data', (chunk)=>{
            
              res.write(chunk)    // -----> this res.write is itself a writable stream and if i want to write a file in the current directory than i will use createWriteStream method
              res.end()           // ----> here res.end works as a single that all the data is read
    })

    res.on('error' , (error)=>{
        res.end(error.message)
    })
})

server.listen(8000,'127.0.0.1' ,()=>{
    console.log('server is Started')
})