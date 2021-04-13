import { Repository } from "../dao/repository";
import { Book } from "../model/book.model";
import MOCK_BOOKS from "../model/mock-books";

export const GOOGLE_BOOKS_API_URL = 'https://www.googleapis.com/books/v1/volumes?q=';

class BookService {
    repo = new Repository();
    constructor(apiUrl) {
        this.apiUrl = apiUrl;
        MOCK_BOOKS.forEach(book => this.repo.create(book));
    }

    async getAllBooks() {
        return this.repo.findAll();
    }

    async searchBooks(searchTerms) {
        console.log(`Searching for: ${searchTerms}`);
        const foundBooksResp = await fetch(this.apiUrl + encodeURIComponent(searchTerms))
        const foundBooks = await foundBooksResp.json();
        console.log(foundBooks);
        return foundBooks.items.map(item => new Book(
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

export default new BookService(GOOGLE_BOOKS_API_URL);