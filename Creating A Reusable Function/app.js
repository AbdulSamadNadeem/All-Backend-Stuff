const http = require('http');
const fs   = require('fs');
const url = require('url');



const  index = fs.readFileSync('./index.html' , 'utf-8')
const products = fs.readFileSync('./Pages/products.html' , 'utf-8')
const productsDetials = fs.readFileSync('./Pages/ProductsDetails.html' , 'utf-8')
const ProductsData = JSON.parse(fs.readFileSync('./Data/products.json' , 'utf-8'))



// This is A Reuseable Function

function replaceHTMl(page , data){
    let output = page.replace("{{%IMAGE%}}" , data.image)
    output = output.replace("{{%NAME%}}" , data.title)
    output = output.replace("{{%DISC%}}" , data.description)
    output = output.replace("{{%PRICE%}}" , data.price)
    output = output.replace("{{%ID%}}" , data.id)

    return output
}

////////////////////////////////////////////////

const server = http.createServer((req , res)=>{
    console.log('A request was made')

    const {query , pathname : path} = url.parse(req.url , true)

    if(path ==='/' || path ==='/home'){
        res.end(index.replace('{{%CONTENT%}}' , 'This Is Home Page'))
    }
    else if(path ==='/about'){
        res.end(index.replace('{{%CONTENT%}}' , 'This Is About Page'))
    }
    else if(path ==='/contact'){
        res.end(index.replace('{{%CONTENT%}}' , 'This Is Contact Page'))
    }
    else if(path ==='/products'){
      if(!query.id){
        let data =  ProductsData.map((item)=>{
            return replaceHTMl(products , item)
        })
        console.log(data)
        let productsTemplate= index.replace('{{%CONTENT%}}' , data.join(',') )
        res.end(productsTemplate)
      } else{
        let filteredObj = ProductsData.find((item)=> item.id === Number(query.id)) 
        let detailsHTml = replaceHTMl(productsDetials , filteredObj)
        res.end(index.replace('{{%CONTENT%}}' , detailsHTml))
           
      }
    }
    else {
        res.end(index.replace('{{%CONTENT%}}' , 'Page Not Found'))
    }
    // if(path ==='/' || path ==='/home'){
    //     res.end(index.replace('{{%CONTENT%}}' , 'This Is Home Page'))
    // }
    // if(path ==='/' || path ==='/home'){
    //     res.end(index.replace('{{%CONTENT%}}' , 'This Is Home Page'))
    // }
})

server.listen(8000 , '127.0.0.1' , ()=>{
    console.log('server is Started')
})