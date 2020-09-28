
var i, copy;
var employees = [
  { name: 'John', age: 35, qualifications: ['React'] },
  { name: 'Bill', age: 45 },
  { name: 'Amy', age: 27 },
  { name: 'Ivan', age: 27, qualifications: ['React', 'TypeScript']}
];

var person1 = {}; // prototyple
person1.name = 'Petar';
person1.age = 30;
person1.qualifications = ['javascript', 'React', 'Vue.js']
var person2 = new Object(); // pseudo-classical
person2.name = 'Dimitar';
person2.age = 40;
person2.qualifications = ['C++', '.NET'];

var person3 = Object.create(Object.prototype, {
  name: {
    value: 'Stefan', writable: true, enumerable: true, configurable: true
  },
  age: {
    value: 45, writable: true, enumerable: true, configurable: true
  },
  qualifications: {
    value: ['javascript', 'React 16', 'TDD'], writable: true, enumerable: true, configurable: true
  },
});

employees.push(person1, person2, person3);

// console.log(employees);

// Shallow copy
var copy = employees.slice(0);// shallow copy
console.log('Same?', employees === copy);
console.log('Sahllow copy?: ', employees[0] === copy[0])

// Deep copy
var deepCopy = JSON.parse(JSON.stringify(employees));// deep copy
// console.log(deepCopy)
console.log('Same?', employees === deepCopy);
console.log('Sahllow copy?: ', employees[0] === deepCopy[0]);

// every
const isQualified = (e) => e.qualifications && e.qualifications.length && e.qualifications.length > 0;
console.log('Are all employees qualified?: ', 
  employees.every(isQualified))

//some
const isReactQualified = e =>
  isQualified(e) && e.qualifications.some(
    qual => qual.toLocaleLowerCase().includes('react'));
console.log('Is some employee React qualified?: ', employees.some(isReactQualified))

// filter
// console.log('which employees are React qualified?: ', employees.filter(isReactQualified))

// map
console.log('What qualifications React employees posess?: ', 
  employees.filter(isReactQualified)
    .map(e => e.qualifications)
);

// reduce

quallifications = employees.filter(isReactQualified)
  .map(e => e.qualifications)
  .reduce((acc, qa) => acc.concat(qa), []);

qualSet = new Set(quallifications);
console.log('What qualifications React employees posess?: ', [...qualSet]);





