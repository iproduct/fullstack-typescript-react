class Person {
    constructor(id, fName, lName, address){
        this.id = id;
        this.fName = fName;        
        this.lName = lName;
        this.address = address;
    }
    toString() {
        return `ID: ${this.id}, Name: ${this.fName} ${this.lName}, Address: ${this.address}`;
    }
}

const ROLE_USER = 0, ROLE_ADMIN = 1;

const ROLE = ['ROLE_USER', 'ROLE_ADMIN']


class User extends Person {
    constructor(id, username, password, fName, lName, address, roles = [ROLE_USER]) {
        super(id, fName, lName, address);
        this.username = username;
        this.password = password;
        this.roles = roles;
    }

    toString() {
        return super.toString() + 
        `, Username: ${this.username}, Password: ${this.password}, Roles: ${this.roles.map(r => ROLE[r]).join(', ')}`
    }
}

p1 = new Person(1, 'Ivan', 'Petrov', 'Sofia 1000');
console.log(p1.toString());

user = new User(2, 'mitko', 'mitko123', 'Dimitar', 'Georgiev', 'Plovdiv, BG');
admin = new User(2, 'hristo', 'hristo123', 'Hristo', 'Georgiev', 'Sofia, BG', [ROLE_ADMIN, ROLE_USER]);
console.log(user.toString());
console.log(admin.toString());