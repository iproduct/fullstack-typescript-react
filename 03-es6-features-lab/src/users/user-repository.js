const User = require('./users').User;

const MOCK_USERS = [
    new User('Default', 'Admin', 'admin', 'admin', 'admin', 'NON_BINARY',
    'https://freesvg.org/img/user2.png', 'Default administrator created by the system.'),
    new User('Ivan', 'Petrov', 'ivan', 'ivan', 'author', 'MALE',
    'https://freesvg.org/img/user2.png'),
    new User('Dimitar', 'Georgiev', 'dimitar', 'dimitar', 'author', 'MALE',
    'https://freesvg.org/img/user2.png')
];

let nextId = 0;
class UserRepository {
    users = new Map();
    constructor() {
        MOCK_USERS.forEach(user => this.create(user));
    }
    create(user) {
        user.id = ++nextId;
        this.users.set(user.id, user);
    }
    findAll() {
        return this.users.values();
    }
}

const userRepo = new UserRepository();
// for(const user of userRepo.findAll()) {
//     console.log(user);
// }
console.log(Array.from(userRepo.findAll()));