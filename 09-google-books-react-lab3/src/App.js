import './App.css';
import bookService from './service/book.service';
import React, { useState } from 'react';
import Nav from './components/Nav/Nav';
import BookList from './components/BookList/BookList';

function App() {
  const [books, setBooks] = useState([]);

  function handleSearch(serachText) {
    bookService.searchBooks(serachText)
      .then(foundBooks => setBooks(foundBooks))
      .catch(err => console.log(err))
  }

  return (
    <React.Fragment>
      <Nav onSearchBooks={handleSearch} />
      <div className="section no-pad-bot">
        <div className="container">
          <h1 className="header orange-text">Your Favourite Books</h1>
          <BookList books={books} />
          
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
