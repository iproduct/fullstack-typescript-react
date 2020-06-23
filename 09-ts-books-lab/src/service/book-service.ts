
export const GOOGLE_BOOKS_API = 'https://www.googleapis.com/books/v1/volumes?q=';

class BookService {
    constructor(private apiUrl: string) {}
}

export default new BookService(GOOGLE_BOOKS_API);