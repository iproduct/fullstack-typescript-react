'use strict'
function Person(name, age){
    // console.log(this);
    this.name = name;
    this.age = age;
}

Person.prototype.toString = function() {
    return this.name + ", age: " + this.age;
}

function Employee(name, age, practice, qualifications) {
    Person.apply(this, [name, age]);
    this.practice = practice;
    this.qualifications = qualifications;
}

var employees = [
    new Employee('John Smith', 35, 12, ['js', 'fortran', 'php']),
    new Employee('George Hamilton', 42, 5, ['js', 'node.js', 'express']),
    new Employee('Amy Smith', 39, 14, ['java', 'js', 'php']),
    new Employee('Simon Mangroove', 27, 3, ['php', 'mysql', 'html', 'css']),
    new Employee('Vera Dimitrova', 20, 0, []),
    new Employee('Caren Blake', 32, 9, ['js', 'ruby', 'kotlin']),
    new Employee('Hristo Petrov', 22, 0),
];

// employees.forEach(function(emp){
//     console.log(emp);
// })

var allQualifications = employees.filter(function(emp){
    return emp.qualifications && emp.qualifications.length > 0;
}).flatMap(emp => emp.qualifications)
.reduce((accumulator, qual) => accumulator.indexOf(qual) < 0 ? 
            accumulator.concat(qual) : accumulator, 
            []
).sort()

console.log(allQualifications)

console.log(employees.sort((e1, e2) => e1.name.localeCompare(e2.name)))