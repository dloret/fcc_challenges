import React from 'react';

import sounds from '../../sounds/sounds.json';

import DR660_808_Clap from '../../sounds/DR660_808_Clap.wav';
import DR660_808_High_Tom from '../../sounds/DR660_808_High_Tom.wav';
import DR660_808_Snare from '../../sounds/DR660_808_Snare.wav';
console.log(sounds);

const handleClick = event => {
  event.persist();
  console.log(event.nativeEvent);
  event.nativeEvent.srcElement.children[0].play();
};

export default function Keyboard() {
  return (
    <section>
      {sounds.map(sound => (
        <button
          id={sound.key}
          className="drum-pad"
          key={sound.key}
          onClick={handleClick}
        >
          <audio className="clip" src={sound.fileName} type="audio/wav" />
          {sound.key}
        </button>
      ))}
    </section>
  );
}
