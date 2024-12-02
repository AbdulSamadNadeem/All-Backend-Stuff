const events = require('events')
const users = require('./Modules/customEvent')
const myemitter = new users();

myemitter.on('userRequested' , (id , name)=>{                       // .on is a event listener likse add event listener in JS
    console.log(`A new user ${name} with ID ${id} is  requesting`)
})
myemitter.on('userRequested' , (id , name)=>{                       // .on is a event listener likse add event listener in JS
    console.log(`A new user ${name} with ID ${id} is  adding`)
})

myemitter.emit('userRequested' , 100 , 'Abdullah') 