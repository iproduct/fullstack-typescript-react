
export type IdType = number;
export class Comment {
    static nextId: IdType =0;
    static getNextId(): IdType {
        return ++Comment.nextId;
    }
    id: IdType = Comment.getNextId();
    constructor(
        public  author: string,
        public text: string){}
}

