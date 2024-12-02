const fs = require('fs').promises

// fs.readFile('./files/input.txt' , 'utf-8' , (error,data)=>{
//     console.log(data);
//     fs.readFile(`./files/${data}.txt` , 'utf-8' , (err , data2)=>{
//         console.log(data2)
//     })
// })

// console.log('loding data please wait......')

//it is a cal back hell we will not use it we will use async/await instead

async function Readfile (){
    try{
        const data = await fs.readFile('./files/input.txt' , 'utf-8')
        const data2 = await  fs.readFile(`./files/${data}.txt` , 'utf-8')
        console.log(data2)
    } catch(err){
        console.log(err)
    }

}

console.log('loading data please wait.......')

Readfile()