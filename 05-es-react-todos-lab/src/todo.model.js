export const ACTIVE = 0;
export const COMPLETED = 1;
export const CANCELED = 2;

export const TodoStatus = ['ACTIVE', 'COMPLETED', 'CANCELED']

export class Todo {
    static nextId = 0;
    id = ++Todo.nextId;
    constructor(text, status = ACTIVE){
        this.text = text;
        this.status = status;
    }
}