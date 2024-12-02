const http = require('http')
const fs = require('fs')

const page  = fs.readFileSync('./index.html' , 'utf-8')

const server = http.createServer((req , res)=>{
    console.log("A request is made ")
    let path = req.url.toLowerCase()

    if(path ==='/' || path === '/home'){
        res.writeHead(200 , {
            'Content-Type' : 'text/HTMl',
            'my-header' : 'Hello'
        })
        res.end(page.replace('{{%CONTENT%}}' , 'This is Home Page'))
    }
    else if(path === '/products'){
        res.writeHead(200 , {
            'Content-Type' : 'text/HTMl',
            'my-header' : 'Hello'
        })
        res.end(page.replace('{{%CONTENT%}}' , 'This is Products Page'))
    }
    else if(path === '/about' ){
        res.writeHead(200 , {
            'Content-Type' : 'text/HTMl',
            'my-header' : 'Hello'
        })
        res.end(page.replace('{{%CONTENT%}}' , 'This is About Page'))
    }
    else if(path === '/contact'){
        res.writeHead(200 , {
            'Content-Type' : 'text/HTMl',
            'my-header' : 'Hello'
        })
        res.end(page.replace('{{%CONTENT%}}' , 'This is Contact Page'))
    } 
    else{
        res.writeHead(404 , {
            'Content-Type' : 'text/HTMl',
            'my-header' : 'Hello'
        })
        res.end(page.replace('{{%CONTENT%}}' , 'Error 404 : page not found'))
    }
})

server.listen(8000 , '127.0.0.1' , ()=>{
    console.log('Server is Started')
})