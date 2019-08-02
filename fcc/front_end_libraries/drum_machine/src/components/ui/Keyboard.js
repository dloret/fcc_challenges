import React from 'react';

import sounds from '../../sounds/sounds.json';
console.log(sounds);

export default function Keyboard() {
  return (
    <section>
      {sounds.map(sound => {
        import(`../../sounds/${sound.fileName}.${sound.ext}`)
          .then(module => (
            <button id={sound.key} className="drum-pad" key={sound.key}>
              <audio className="clip" src={module} type="audio/wav" />
              {sound.key}
            </button>
          ))
          .catch(error => console.log(error));
      })}
    </section>
  );
}
