export type IdType = string;

export interface Indentifiable {
    id: IdType
}

export interface SearchCallback {
    (searchText: string): void;
}
