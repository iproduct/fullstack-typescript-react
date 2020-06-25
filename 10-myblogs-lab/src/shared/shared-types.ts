import { Post } from "../model/post.model";

export type IdType = string;

export interface Indentifiable {
    id: IdType
}

export interface SearchCallback {
    (searchText: string): void;
}

export interface PostCallback {
    (post: Post): void;
}

