const http = require('http');
const fs = require('fs')

const template = fs.readFileSync('./index.html' , 'utf-8')

const server = http.createServer((request , response)=>{
   console.log('a request is made')
    let path = request.url
      
    if(path.toLowerCase() === '/' || path.toLowerCase()=== '/home'){
        response.end(template.replace('this is Home page' , 'This Is Home Page'))
    } else if(path.toLowerCase()=== '/contact'){
        response.end(template.replace('this is Home page' , 'This Is Contact Page'))
    } else if(path.toLowerCase()=== '/about'){
        response.end(template.replace('this is Home page' , 'This Is About Page'))
    }else{
        response.end(template.replace('this is Home page' , 'Error 404:Page not Found'))
    }
})

server.listen(5500 , '127.0.0.1' , ()=>{
    console.log('Server is Started')
})
