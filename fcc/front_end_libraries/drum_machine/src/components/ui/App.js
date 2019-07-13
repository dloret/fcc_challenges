import React from 'react';

import Keyboard from './Keyboard';
import '../../style/App.scss';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Drum Machine</h1>
      </header>
      <div id="drum-machine">
        <div id="display" />
        <Keyboard />
      </div>
    </div>
  );
}

export default App;
