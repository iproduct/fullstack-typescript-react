import { Comment } from "../model/comments.model";

export interface CommentListener {
    (comment: Comment): void;
}