const http = require('http')
const fs = require('fs')

const page  = fs.readFileSync('./index.html' , 'utf-8')
let products = JSON.parse(fs.readFileSync('./Data/products.json' , 'utf-8'))
let productsHTML = fs.readFileSync('./Pages/products.html' , 'utf-8')
let productsHTMlArray = products.map((item)=>{
     let output = productsHTML.replace("{{%IMAGE%}}" , item.thumbnail)
     output = output.replace("{{%NAME%}}" , item.title)
     output = output.replace("{{%DISC%}}" , item.description)
     output = output.replace("{{%PRICE%}}" , item.price)
     output = output.replace("{{%CATE%}}" , item.beauty)
     output = output.replace("{{%BRAND%}}" , item.brand)

     return output
})

const server = http.createServer((req , res)=>{
    console.log("A request is made ")
    let path = req.url.toLowerCase()

    if(path ==='/' || path === '/home'){
        res.writeHead(200 , {
            'Content-Type' : 'text/html',
            'my-header' : 'Hello'
        })
        res.end(page.replace('{{%CONTENT%}}' , 'This is Home Page'))
    }
    else if(path === '/products'){
        res.writeHead(200 , {'Content-Type' : 'text/html' })
        res.end(page.replace('{{%CONTENT%}}' , productsHTMlArray.join(',')))
    }
    else if(path === '/about' ){
        res.writeHead(200 , {
            'Content-Type' : 'text/html',
            'my-header' : 'Hello'
        })
        res.end(page.replace('{{%CONTENT%}}' , 'This is About Page'))
       
    }
    else if(path === '/contact'){
        res.writeHead(200 , {
            'Content-Type' : 'text/html',
            'my-header' : 'Hello'
        })
        res.end(page.replace('{{%CONTENT%}}' , 'This is Contact Page'))
    } 
    else{
        res.writeHead(404 , {
            'Content-Type' : 'text/html',
            'my-header' : 'Hello'
        })
        res.end(page.replace('{{%CONTENT%}}' , 'Error 404 : page not found'))
    }
})

server.listen(8000 , '127.0.0.1' , ()=>{
    console.log('Server is Started')
})