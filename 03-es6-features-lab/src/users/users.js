let nextId = 0;
class Entity {
    static getNextId() {
        return ++nextId;
    }
    constructor({ id, created, modified }) {
        this.id = id;
        this.created = created || new Date();
        this.modified = modified || new Date();
    }
    toString() {
        return `        id: ${this.id}, 
        created: ${this.created}, 
        modified: ${this.modified}`;
    }
}

class User extends Entity {
    status = 'active';
    constructor(firstName, lastName, username, password, role, gender, imageUrl, info) {
        super({});
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.password = password;
        this.gender = gender;        
        this.role = role;
        this.imageUrl = imageUrl;
        this.info = info;
    }
    toString() {
        return `${super.toString()}, 
        first: ${this.firstName}, 
        last: ${this.lastName}, 
        username: ${this.username}, 
        password: ${this.password}, 
        gender: ${this.gender}, 
        imageUrl: ${this.imageUrl}, 
        info: ${this.info}, 
        status: ${this.status}`;
    }
}

// const admin = new User('Default', 'Admin', 'admin', 'admin', 'admin', 'NON_BINARY',
//     'https://freesvg.org/img/user2.png', 'Default administrator created by the system.');

// console.log(admin.toString());

module.exports.Entity = Entity;
module.exports.User = User;