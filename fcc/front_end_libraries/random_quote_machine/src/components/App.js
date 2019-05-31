import React from 'react';

import Quote from './Quote';
import Twitter from './Twitter';
import Next from './Next';

import '../styles/App.scss';

const quoteCategoriesURL = 'http://quotes.rest/qod/categories.json';
const quotesURL = 'http://quotes.rest/qod.json?category=';

const fakeData = {
  author: 'fake author',
  quote: 'fake quote'
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Random quote machine</h1>
      </header>
      <main id="quote-box">
        <Quote author={fakeData.author} quote={fakeData.quote} />
        <Twitter />
        <Next />
      </main>
    </div>
  );
}

export default App;
