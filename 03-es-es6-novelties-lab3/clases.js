class Person {
    static nextId = 0; // es7
    id = ++ Person.nextId; // es7
    constructor(fName, lName, address){
        this.fName = fName;
        this.lName = lName;
        this.address = address;
    }
    toString(){
        return `ID: ${this.id}, Name: ${this.fName + ' ' + this.lName}, Address: ${this.address}`;
    }
    
}

const ROLE_USER = 0;
const ROLE_ADMIN = 1;
const Role = ['ROLE_USER', 'ROLE_ADMIN']


class User extends Person {
    constructor(fName, lName, address, username, password, roles=[ROLE_USER]){
        super(fName, lName, address);
        this.username = username;
        this.password = password;
        this.roles = roles;
    }
    toString() { // overiding
        return super.toString() +
        `, Username: ${this.username}, Password: ${this.password}, Roles: ${this.roles.map(r => Role[r]).join(', ')}`;
    }

}

const p1 = new Person('Ivan', 'Petrov', 'Sofia 1000');
// console.log(p1.toString())
const u2 = new User('Dimitar', 'Georgiev', 'Plovdiv, BG', 'mitko', 'mitko123')
// console.log(u2.toString())
const u3 = new User('Hristo', 'Dimitrov', 'Plovdiv, BG', 'hristo', 'hristo123', [ROLE_ADMIN, ROLE_USER])
// console.log(u3.toString())

const all = [p1, u2, u3];
const printAll = (persons) => {
    persons.forEach(p => console.log(p.toString())); // polymorphic method call
}

printAll(all);