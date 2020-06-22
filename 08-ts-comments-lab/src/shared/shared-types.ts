import { Comment } from "../model/comments.model";

export interface CommentListener {
    (comment: Comment): void;
}

export interface NoArgListener {
    (): void;
}