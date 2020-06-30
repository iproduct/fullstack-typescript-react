import * as events from 'events';
import { EventEmitter } from 'events';
import e = require('express');


const emitter = new EventEmitter();

emitter.on('myevent', (payload, status) => {
    console.log(`Event received: ${JSON.stringify(payload)}, ${JSON.stringify(status)}`);
});

emitter.emit('myevent');
emitter.emit('myevent', {name: 'Trayan', age: 35});
emitter.emit('myevent', {name: 'Trayan', age: 35}, {status: 'ready'});

let num = 0;

const interval = setInterval(() => emitter.emit('myevent', 
    {num:(++num), name: 'Trayan', age: 35 }, 'active'), 3000);

setTimeout(clearInterval, 10000, interval);