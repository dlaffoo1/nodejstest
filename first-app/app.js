/*
const path = require('path');
var pathObj = path.parse(__filename);
console.log(pathObj);


const os = require('os');
var totalMemory = os.totalmem();
var freeMemory = os.freemem();
console.log('Total Memory: ' + totalMemory)
console.log('Free Memory: ' + freeMemory)

//Template String
console.log(`Total Memory: ${totalMemory}`);
console.log(`Free Memory: ${freeMemory}`);
*/


/*
const fs = require('fs');


const files = fs.readdirSync('./');
console.log(files);


fs.readdir('./', function(err, files) {
    if (err) console.log('Error', err);
    else console.log('Result',files);
});
*/

/*
const EventEmitter = require('events');
const emitter = new EventEmitter();

//register a listener
emitter.on('messageLogged', (arg) => {
    console.log('Listener called', arg);
});

//raise an event
emitter.emit('messageLogged', { id: 1, url: 'http://'});

//raise: logging (data: messge)

//register a listener
emitter.on('logging', (arg) => {
    console.log('loggin called');
});

//raise an event
emitter.emit('logging');
*/

const EventEmitter = require('events');

const Logger = require('./logger');
const logger = new Logger();

logger.on('messageLogged', (arg) => {
    console.log('Listener called', arg);
});

logger.log('message');


