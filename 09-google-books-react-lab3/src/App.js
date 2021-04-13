import './App.css';
import bookService from './service/book.service';
import { useState } from 'react';

function App() {
  const [serachText, setSerachText] = useState('');
  const [books, setBooks] = useState([]);
  function handleTextChanged(event) {
    setSerachText(event.target.value)
  }
  function handleSearch(event) {
    bookService.searchBooks(serachText)
      .then(foundBooks => setBooks(foundBooks))
      .catch(err => console.log(err))
  }

  return (
    <div className="App">
      <header className="App-header">
        <input type="text" value={serachText} onChange={handleTextChanged} />
        <button type="button" onClick={handleSearch}>Serach</button>
        <ul className="App-results">
          {books.map(bk => (<li key={bk.id}>{JSON.stringify(bk)}</li>))}
        </ul>
      </header>
    </div>
  );
}

export default App;
