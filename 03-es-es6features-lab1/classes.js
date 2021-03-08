class Person {
    constructor(){
        this.create(...arguments);
    }
    create(id, fName, lName, address){  
        this.id = id;
        this.fName = fName;
        this.lName = lName;
        this.address = address;
    }
    toString() {
        return `ID: ${this.id}, Name: ${this.fName + ' ' + this.lName}, Address: ${this.address}`;
    }
}

const ROLE_USER = 0, ROLE_ADMIN = 1;
const Role = ['ROLE_USER', 'ROLE_ADMIN']

class User extends Person {
    create(id, fName, lName, address, username, password, roles = [ROLE_USER]) {
        super.create(id, fName, lName, address);
        this.username = username;
        this.password = password;
        this.roles = roles;
        // return { id, fName, lName, address, username, password, roles,
        //     toString: () => 
        //         `ID: ${id}, Name: ${fName + ' ' + lName}, Address: ${address}` +
        //         `Username: ${username}, Password: ${password}, Roles: ${roles.map( r => Role[r]).join(', ')}`
        // }
    }
    toString() { // method overiding
        return super.toString() + 
        `, Username: ${this.username}, Password: ${this.password}, Roles: ${this.roles.map( r => Role[r]).join(', ')}`;
    }
}

p1 = new Person(1, 'Ivan', 'Petrov', 'Sofia 1000');
console.log(p1.toString())

u2 = new User(2, 'Hristo', 'Dimitrov', 'Plovdiv, BG', 'hristo', 'hristo');
console.log(u2.toString())

u3 = new User(3, 'Emil', 'Ivanov', 'Plovdiv, BG', 'emo', 'emo', [ROLE_ADMIN, ROLE_USER]);
console.log(u3.toString())