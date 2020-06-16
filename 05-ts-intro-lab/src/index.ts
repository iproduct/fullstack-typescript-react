import { Person } from './person.js';
import { User, UserBase, Role, Author, Reader, Admin } from './user.js';
import { UserRepository, MockUserRepository } from './user-repository.js';

/**
 * @description greets the the user by name
 * @param  {string} name
 * @returns string
 */
function greeter(user: User): string {
    return `Hi ${user.getSalutation()}!`;
}

const users: User[] = [
    new Author(1, 'Dimitar', 'Petrov', 'mitko@abv.bg', 'mitko', [Role.READER],
        { country: 'Bulgaria', city: 'Sofia' }),
    new Reader(1, 'Maria', 'Petrova', 'mary@abv.bg', 'mary'),
    new Admin(1, 'Hristo', 'Petrov', 'hristo@abv.bg', 'hristo')
];

const userRepo : UserRepository = new MockUserRepository();
users.forEach(u => userRepo.add(u));

document.getElementById('greeting')!.innerHTML = userRepo.findAll().map(user => greeter(user)).join('<br>');
