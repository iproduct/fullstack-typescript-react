import { Person } from './person.js';
import { User, UserBase, Role } from './user.js';

/**
 * @description greets the the user by name
 * @param  {string} name
 * @returns string
 */
function greeter(user: User): string {
    return `Hi ${user.salutation}!`;
}

const user1: User = new UserBase(1, 'Dimitar', 'Petrov', 'mitko@abv.bg', 'mitko', [Role.AUTHOR, Role.READER],
    {country:'Bulgaria', city: 'Sofia'});
document.getElementById('greeting')!.innerHTML = greeter(user1);