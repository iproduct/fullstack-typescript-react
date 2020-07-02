import { Post } from '../model/post.model';
import { Indentifiable, IdType } from '../model/shared-types';
import { MongoClient } from 'mongodb';

export interface Repository<T extends Indentifiable> {
    add(user: T): Promise<T>;
    edit(user: T): Promise<T>;
    deleteById(id: IdType): Promise<T>;
    findAll(): Promise<T[]>;
    findById(id: IdType): Promise<T>;
    getCount(): Promise<number>;
}

