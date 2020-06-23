import { Indentifiable, IdType } from '../shared/shared-types';
export interface IBook extends Indentifiable {
    title: string;
    subtitle?: string;
    authors: string;
    frontPage: string;
    keywords?: string[];
}

export class Book implements IBook {
    id: IdType = 0;
    constructor(
        public title: string,
        public authors: string,
        public frontPage: string,
        public subtitle?: string,
        public keywords: string[] = []
        ) {}
}