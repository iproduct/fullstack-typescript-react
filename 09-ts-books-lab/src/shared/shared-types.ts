export type IdType = number;

export interface Indentifiable {
    id: IdType
}

export interface SearchCallback {
    (searchText: string): void;
}
