import React, { useState } from 'react';

import Keyboard from './Keyboard';
import '../../style/Drummer.scss';

function Drummer() {
  const [display, setDisplay] = useState('');

  const handleDisplay = soundName => {
    console.log('setting display: ', soundName);
    setDisplay(soundName);
  };

  return (
    <div className="App">
      <header>
        <h1>Drum Machine</h1>
      </header>
      <main id="drum-machine">
        <div id="display">{display}</div>
        <Keyboard showDisplay={handleDisplay} />
      </main>
    </div>
  );
}

export default Drummer;
