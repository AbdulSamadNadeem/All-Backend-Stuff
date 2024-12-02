const fs = require('fs')

console.log('Thie program is started')

fs.readFile('/text.txt', ()=>{
    console.log('the file is readed')

    setTimeout(()=>{
        console.log('the settime out is executed')
    },0)
    
    setImmediate(()=>{
        console.log('the setimmediate is executed')


    })
    process.nextTick(()=>{console.log('the next tick is executed')})
})





console.log('the program is endedn')





