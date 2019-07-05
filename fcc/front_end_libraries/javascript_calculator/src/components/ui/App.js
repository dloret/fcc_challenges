import React from 'react';

import Display from '../containers/Display';
import Keyboard from '../containers/Keyboard';
import '../../style/App.scss';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Javascript Calculator</h1>
      </header>
      <div className="calculator">
        <Display />
        <Keyboard />
      </div>
    </div>
  );
}

export default App;
