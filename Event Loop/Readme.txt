What is Event Loop.

The event loop is what allows Node.js to perform non-blocking I/O operations .because node is single threaded .

The Event Loop is consist of four ticks/phases

1)the Expired Timers
2)the I/O and Polling tasks
3)setimmediate Tasks
4)closed callback

apart from these ticks/ques we have two more ques which are not attached to event lopp they are independent the 
1)Micro Task Que --? the proess attached to promises are control
2)NextTick Que  --> the process which are .nextick que are attached