import { Indentifiable, IdType } from './shared-types';
import { OptionalId } from 'mongodb';
export interface IUser extends Indentifiable {
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    password: string;
    imageUrl: string;
    roles: Role[];
}

export enum Role{
    READER, AUTHOR, ADMIN
}

export class User implements IUser{
    constructor(
        public _id: IdType,
        public firstName: string,
        public lastName: string,
        public username: string,
        public email: string,
        public password: string,
        public imageUrl: string,
        public roles: Role[] = [Role.READER, Role.AUTHOR]
        ) {}
}