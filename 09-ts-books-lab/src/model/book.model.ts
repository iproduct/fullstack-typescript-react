import { Indentifiable, IdType } from '../shared/shared-types';
export interface IBook extends Indentifiable {
    title: string;
    subtitle?: string;
    authors?: string[];
    categories?: string[];
    description?: string;
    frontPage?: string;
    keywords?: string[];
}

export class Book implements IBook {

    constructor(
        public id: IdType,
        public title: string,
        public authors?: string[],
        public frontPage?: string,
        public subtitle?: string,
        public categories?: string[],
        public keywords: string[] = [],
        public description?: string
        ) {}
}