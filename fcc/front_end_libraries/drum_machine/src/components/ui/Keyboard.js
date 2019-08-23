import React, { useState, useEffect } from 'react';

import Pad from './Pad';
import sounds from '../../sounds/sounds.json';
console.log(sounds);

export default function Keyboard({ showDisplay }) {
  const [playing, setPlaying] = useState('');

  const handleEvent = event => {
    let soundName = null;

    if (event.type && event.type === 'click') {
      setPlaying(event.target.id);
      soundName = sounds.filter(sound => sound.key === event.target.id);
      showDisplay(soundName[0].fileName);
    } else if (
      event.key &&
      ['q', 'w', 'e', 'a', 's', 'd', 'z', 'x', 'c'].includes(event.key)
    ) {
      setPlaying(event.key);
      soundName = sounds.filter(sound => sound.key === event.key);
      showDisplay(soundName[0].fileName);
    }
    setTimeout(() => setPlaying(''), 50);
  };

  useEffect(() => {
    window.addEventListener('keydown', handleEvent);
    return () => window.removeEventListener('keydown', handleEvent);
  });

  return (
    <section>
      {sounds.map(sound => (
        <div
          className="drum-pad"
          onClick={handleEvent}
          id={sound.key}
          key={sound.key}
        >
          {sound.key.toUpperCase()}
          <Pad
            source={`${sound.url}`}
            playing={playing}
            padId={sound.key.toUpperCase()}
          />
        </div>
      ))}
    </section>
  );
}
