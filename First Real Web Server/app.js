const http = require('http');

// 1) Create a Server

const server = http.createServer((request , response) => {
    response.end('hello from the server')
    console.log('A Request is Received')
    // console.log(response)
})

// 2) Run the Server
//the listen method requires three parameters the first is the port number the second is the local host and the thirs is a callback function

server.listen(8000 , '127.0.0.1' , ()=>{
    console.log('Server is Running on port')
})

