import React from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import { SearchCallback } from './shared/shared-types';

function App() {
  const handleSearch: SearchCallback =  (searchText) => {

  };
  
  return (
    <React.Fragment>
    <Nav onSearchBooks={handleSearch} />
    </React.Fragment>
  );
}

export default App;
