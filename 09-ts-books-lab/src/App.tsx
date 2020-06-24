import React, { useState, useEffect, useReducer } from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import { SearchCallback } from './shared/shared-types';
import { BookList } from './components/BookList/BookList';
import { Book } from './model/book.model';
import Header from './components/Header/Header';
import MOCK_BOOKS from './model/mock-books';
import BookService from './service/book-service';

export interface BookAction {
  type: string;
  book: Book; 
}

// function booksReducer(state: Book[], action: BookAction) {
//   switch (action.type) {
//     case 'add':
//       return [...state, action.book];
//     // ... other actions ...
//     default:
//       return state;
//   }
// }


function App() {
  const [books, setBooks] = useState<Book[]>([]);
  useEffect(() => {
    BookService.getAllBooks().then(
      books => setBooks(books)
    );
  }, []);

  // const [books, dispatch] = useReducer(booksReducer, []);
  // useEffect(() => MOCK_BOOKS.forEach(
  //   (book, index) => setTimeout(dispatch, index*2000, {type: 'add', book: book as Book})),
  //   []); //on mount only
  

  const handleSearch: SearchCallback =  (searchText) => {
    BookService.loadBooks(searchText.split(/[\s,;]+/));
  };
  
  return (
    <React.Fragment>
    <Nav onSearchBooks={handleSearch} />
    <div className="section no-pad-bot" id="index-banner">
      <div className="container" >
        <Header />
        <BookList books={books} />
      </div>
    </div>
    </React.Fragment>
  );
}




export default App;
