import { Post } from "../model/post.model";
import { ObjectID } from 'mongodb';

export type IdType = ObjectID;

export interface Indentifiable {
    _id?: IdType
}


