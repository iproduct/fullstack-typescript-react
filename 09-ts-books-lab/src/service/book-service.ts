import { BookItem } from './../components/BookItem/BookItem';
import { BookRepository } from '../dao/repository';
import MOCK_BOOKS from '../model/mock-books';
import { Book } from '../model/book.model';

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
        const booksFound = await result.json();
        console.log(booksFound);
        // map google books --> Book[]
        // booksFound['items']
        return [];
    }
}

export default new BookService(GOOGLE_BOOKS_API);

