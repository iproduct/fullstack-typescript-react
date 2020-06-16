import { Person } from './person.js';

/**
 * @description greets the the user by name
 * @param  {string} name
 * @returns string
 */
function greeter(person: Person): string {
    return person.congratulate();
}

const person1: Person = {
    firstNAME: 'Dimitar', 
    lastName: 'Petrov', 
    congratulate() {
        return `Hello ${this.firstNAME} ${this.lastName}, from TypeScript!`
    }
}
document.getElementById('greeting')!.innerHTML = greeter(person1);