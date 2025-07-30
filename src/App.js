import './App.css';

import React, { useState } from 'react';
import { useSelector } from 'react-redux';

// component import
import Header from './components/Header/Header';
import { selectTerm } from './features/feedSlice/feedSlice';

function App() {
  var term = useSelector(state => state.feed.searchTerm);

  return (
    <div className="App">
      <Header />

      <p>term: {term}</p>
    </div>
  );
}

export default App;
