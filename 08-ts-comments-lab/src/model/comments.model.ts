export class Comment {
    static nextId =0;
    id = ++Comment.nextId;
    constructor(
        public  author: string,
        public text: string){}
}