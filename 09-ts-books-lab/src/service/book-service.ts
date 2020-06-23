import { BookRepository } from '../dao/repository';
import MOCK_BOOKS from '../model/mock-books';
import { Book } from '../model/book.model';

export const GOOGLE_BOOKS_API = 'https://www.googleapis.com/books/v1/volumes?q=';

class BookService {
    private repo = new BookRepository();
    constructor(private apiUrl: string) {
        MOCK_BOOKS.forEach(book => this.repo.add(book as Book));
    }

    getAllBooks() {
        this.repo.findAll();
    }
}

export default new BookService(GOOGLE_BOOKS_API);