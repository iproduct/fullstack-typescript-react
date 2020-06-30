import * as Rx from 'rxjs';
import { from, interval, zip } from 'rxjs';
import { map } from 'rxjs/operators';
import { EventEmitter } from 'events';
import e = require('express');

const emitter = new EventEmitter();

emitter.on('myevent', (payload, status) => {
    console.log(`Event received: ${JSON.stringify(payload)}, ${JSON.stringify(status)}`);
});

const data = from(['Hello', 'Reactive', 'Extensions', 'JavaScript', 'from', 'TypeScript']);
const int = interval(1000);

const result = zip(data, int).pipe(
    map(([text, num]) => `${num}: ${text} [${new Date().getTime()}]`)
);

result.subscribe(next => emitter.emit('myevent', {text: next}));