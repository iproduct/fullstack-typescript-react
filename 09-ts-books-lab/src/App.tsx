import React, { useState, useEffect } from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import { SearchCallback } from './shared/shared-types';
import { BookList } from './components/BookList/BookList';
import { Book } from './model/book.model';
import Header from './components/Header/Header';
import BookService from './service/book-service';

function App() {
  const [books, setBooks] = useState<Book[]>([]);
  useEffect(() => {
    setBooks(BookService.getAllBooks());
  }, []);

  const handleSearch: SearchCallback =  (searchText) => {

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
