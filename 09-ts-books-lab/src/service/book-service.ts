import { BookRepository } from '../dao/repository';
import MOCK_BOOKS from '../model/mock-books';
import { Book } from '../model/book.model';
import { RootObject } from './google-book-types';

export const GOOGLE_BOOKS_API = 'https://www.googleapis.com/books/v1/volumes?q=';

class BookService {
    private repo = new BookRepository();
    constructor(private apiUrl: string) {
        MOCK_BOOKS.forEach(book => this.repo.add(book as Book));
    }

    async getAllBooks() {
        return this.repo.findAll();
    }

    async loadBooks(searchTerms: string[]): Promise<Book[]> {
        console.log(searchTerms);
        const searchText = searchTerms.join(' ');
        const result = await fetch(GOOGLE_BOOKS_API + encodeURIComponent(searchText));
        const booksFound = await result.json() as RootObject;
        // console.log(booksFound);
        return booksFound.items.map(item => new Book(
            item.id,
            item.volumeInfo.title, 
            item.volumeInfo.authors,
            item.volumeInfo.imageLinks?.thumbnail,
            item.volumeInfo.subtitle,
            item.volumeInfo.categories,
            searchTerms,
            item.volumeInfo.description
        ));
    }
}

export default new BookService(GOOGLE_BOOKS_API);

