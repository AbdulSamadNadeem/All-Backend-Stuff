const readline = require('readline') 
// require() is use to import modules (all the modules are object)
// readline is a module thaqt is used to read input and write output from terminal
// const rl = readline.createInterface({
//     input : process.stdin,
//     output : process.stdout
// });
// rl.question('Please Enter Your Age' , (age)=>{
//     console.log(age);
//     rl.close();
// });

// rl.on('close', ()=>{
//     console.log('Shop IS Closed come tomorrow');
//     process.exit(1)
// })

// Reading & Writing files synchronously //
//*******************************************//

const fs = require('fs')

// fs stands for file system module
let textin = fs.readFileSync('./input.txt' , 'utf-8')

console.log(textin)

let text = "fhdsjfhsdjkfhsdkjfhsdkjfhsdkjfhsdkjhsdfk"

let textOut = fs.writeFileSync('./ouput.txt', text)