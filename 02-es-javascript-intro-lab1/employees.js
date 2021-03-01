function Person(name, age){
    this.name = name;
    this.age = age;
}

Person.prototype.toString = function() {
    // console.log(this);
    return this.name + ", age: " + this.age;
}

Person.prototype.bio = function(){
    return "I'm " + this.name + " and I'm " + this.age + " old.";
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

function Employee(name, age, aPractice, qualifications){
    Person.call(this, name, age); // super constructor
    this.practice = aPractice;
    this.qualifications = qualifications;
}

var employees = [
    new Employee("John Smith", 35, 12, ['js', 'fortran', 'php']),
    new Employee("George Hamilton", 42, 5, ['js', 'node.js', 'express']),
    new Employee("Ami Smith",  45, 15,['java', 'js', 'php']),
    new Employee("Simon Mangroove", 27, 3, ['php', 'html', 'css']),
    new Employee("Andrew Harrison", 22, 0, []),
    new Employee("Caren Blake", 39, 9, ['js', 'ruby', 'kotlin']),
    new Employee("Jane Blake", 22, 0, []),
]

Employee.prototype.toString = function() {
    return Person.prototype.toString.apply(this, []) + ", practice: " + this.practice + ", qualifications: ["
        + (this.qualifications && this.qualifications.join(", ")) + "]"
}
// employees.forEach(function(emp){
//     console.log(emp.toString());
//     console.log(emp.bio())
// })

allEmpQualifications = employees
.filter(emp => emp.qualifications.length > 0)
.flatMap(function(emp) {
    return emp.qualifications;
}).reduce((accumulator, qual) => 
    accumulator.indexOf(qual) < 0 ? 
        accumulator.concat(qual): accumulator, []
).sort();

console.log(allEmpQualifications)
