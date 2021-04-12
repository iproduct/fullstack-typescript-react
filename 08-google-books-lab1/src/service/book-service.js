import {MockRepository} from '../dao/repository';
import { Book } from '../model/book-model';
import MOCK_BOOKS from '../model/mock-books';

export const GOOGLE_BOOKS_API_URL = 'https://www.googleapis.com/books/v1/volumes?q=';
class BookService{
    repo = new MockRepository();
    constructor(apiUrl) {
        this.apiUrl = apiUrl;
        MOCK_BOOKS.forEach(book => this.repo.create(book));
    }

    async getAllBooks() {
        return this.repo.findAll();
    }

    async loadBooks(serchTerms) {
        const newBooksResponse = await fetch(this.apiUrl + encodeURIComponent(serchTerms));
        const newBooks = await newBooksResponse.json();
        console.log(newBooks);
        return newBooks.items.map(item => new Book(
            item.id,
            item.volumeInfo.title,
            item.volumeInfo.authors,
            item.volumeInfo.imageLinks?.thumbnail,
            item.volumeInfo.subtitle,
            item.volumeInfo.categories,
            serchTerms,
            item.volumeInfo.descripton
        ))
    }
}

export default new BookService(GOOGLE_BOOKS_API_URL);