import React from 'react';

export default function Keyboard() {
  return (
    <section>
      <button type="button" id="" className="drum-pad">
        Q
        <audio className="clip" preload="auto" autoPlay>
          <source src="../../sounds/DR660_808_Clap.wav" type="audio/wav" />
        </audio>
      </button>
      <button type="button" id="" className="drum-pad">
        W
      </button>
      <button type="button" id="" className="drum-pad">
        E
      </button>
      <button type="button" id="" className="drum-pad">
        A
      </button>
      <button type="button" id="" className="drum-pad">
        S
      </button>
      <button type="button" id="" className="drum-pad">
        D
      </button>
      <button type="button" id="" className="drum-pad">
        Z
      </button>
      <button type="button" id="" className="drum-pad">
        X
      </button>
      <button type="button" id="" className="drum-pad">
        C
      </button>
    </section>
  );
}
