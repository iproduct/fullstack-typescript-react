import { Indentifiable, IdType, ResourceType } from './shared-types';
export interface IPost extends Indentifiable {
    title: string;
    text: string;
    authorId: IdType;
    imageUrl?: string;
    categories?: string[];
    keywords?: string[];
}

export class Post implements IPost {
    static typeId = 'Post';
    constructor(
        public _id: IdType,
        public title: string,
        public text: string,
        public authorId: IdType,
        public imageUrl?: string,
        public categories?: string[],
        public keywords: string[] = [],
        ) {}
}