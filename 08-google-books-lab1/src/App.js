import './App.css';
import React from 'react';
import Nav from './components/Nav/Nav';
import BookService from './service/book-service';

function App() {
  function handleSerachBooks(searchText) {
    BookService.loadBooks(searchText);
  }
  return (
    <React.Fragment>
      <Nav onSearchBooks={handleSerachBooks} />
      <div className="section no-pad-bot">
        <div className="container">
          <h1 class="header orange-text">Your Favourite Books</h1>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
