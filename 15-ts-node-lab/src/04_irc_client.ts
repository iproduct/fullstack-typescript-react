import * as irc from 'irc';
import * as Rx from 'rxjs';
import { from, interval, zip } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import * as process from 'process';

const client = new irc.Client('irc.freenode.net', 'trayan_bot', {
    channels: ['#course-node']
});

client.on('error', (err) => {
    console.error(err);
});

client.on('message', (from, to, message) => {
    console.log(`Message received: ${from} -> ${to} : ${message}`);
});

const data = from(['', '', '', 'Hello', 'Reactive', 'Extensions', 'JavaScript', 'from', 'TypeScript']);
const int = interval(3000);

const result = zip(data, int).pipe(
    filter(([text, num]) => text.length > 0),
    map(([text, num]) => `${num}: ${text} [${new Date().getTime()}]`)
);

client.on('connect', () => {
    result.subscribe(next => client.say('#course-node', next),
    err => console.error(err),
    () => {
        // client.part('#course-node');
        console.log('All messages sent successfully.');
    });
});

const finish = () => {
     client.part('#course-node','Bye from trayans bot!', undefined);
     console.log('Demo finished');
     process.exit(0);
};
setTimeout(finish, 120000)



