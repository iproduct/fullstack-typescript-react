import { Person } from './person.js';

export interface User extends Person {
    password: string;
    roles: Role[];
    readonly salutation: string;
}

export enum Role {
    AUTHOR = 1, READER, ADMIN
}