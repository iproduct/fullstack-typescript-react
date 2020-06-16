import { Person, Contact } from './person.js';
import { IdType } from './shared-types.js';

export interface User extends Person {
    password: string;
    roles: Role[];
    readonly salutation: string;
}

export enum Role {
    AUTHOR = 1, READER, ADMIN
}

export class UserBase implements User {
    constructor(
        public id: IdType,
        public firstName: string,
        public lastName: string,
        public email: string,
        public password: string,
        public roles: Role[],
        public contact?: Contact
    ) {}

    get salutation() {
        return `${this.firstName} ${this.lastName} in roles: ${this.roles.map(role => Role[role]).join(', ')}`;
    }
}