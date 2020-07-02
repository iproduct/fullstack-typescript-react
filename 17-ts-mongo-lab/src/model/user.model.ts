import { Indentifiable, IdType } from './shared-types';
export interface IUser extends Indentifiable {
    fName: string;
    lName: string;
    username: string;
    email: string;
    password: string;
    roles: Role[];
}

export enum Role{
    READER, AUTHOR, ADMIN
}

export class User implements IUser {
    constructor(
        public id: IdType,
        public fName: string,
        public lName: string,
        public username: string,
        public email: string,
        public password: string,
        public roles: Role[] = [Role.READER, Role.AUTHOR]
        ) {}
}