import React, {useState} from 'react';

import '../../node_modules/@fortawesome/fontawesome-free/css/all.css';
import '../style/App.css';

function App() {
  const MAX_TIME = 60;
  const MIN_TIME = 1;

  const [session, setSession] = useState(25);
  const [pause, setPause] = useState(5);
  const [timerLabel, setTimerLabel] = useState('Session');
  const [sessionPlaying, setSessionPlaying] = useState(false);
  const [breakPlaying, setBreakPlaying] = useState(false);

  const setTimer = (event) => {
    const [label, operation] = event.target.id.split('-');
    console.log(label, operation);
    if (operation === 'increment') {
      switch ((label === 'session') ? session : pause) {
        case MAX_TIME: return (label === 'session') ? setSession(1) : setPause(1);
        default: return (label === 'session') ? setSession(session + 1) : setPause(pause + 1);
      }
    }

    if (operation === 'decrement') {
      switch ((label === 'session') ? session : pause) {
        case MIN_TIME: return (label === 'session') ? setSession(1) : setPause(1);
        default: return (label === 'session') ? setSession(session - 1) : setPause(pause - 1);
      }
    }
  }

  const startClock = () => {
    setSessionPlaying(true);
  };

  const pauseClock = () => {
    setSessionPlaying(false);
  };

  const stopClock = () => {
    setSession(25);
    setPause(5);
    setSessionPlaying(false);
    setBreakPlaying(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Pomodoro Clock</h1>
      </header>
      <main>
        <div id="timer-label">{timerLabel}</div>
        <div id="time-left">{breakPlaying ? pause : session}</div>
        <div id="start_stop">
          {(sessionPlaying || breakPlaying) ?
          <i className="fas fa-pause-circle" onClick={pauseClock}></i> :
          <i className="fas fa-play-circle" onClick={startClock}></i>}
        </div>
        <div id="reset"><i className="fas fa-stop-circle" onClick={stopClock}></i></div>
        <div id="break-label">
          <i id="break-decrement" className="fas fa-minus-circle" onClick={setTimer}></i>Break length
          <i id="break-increment" className="fas fa-plus-circle" onClick={setTimer}></i>
        </div>
        <div id="break-length">{pause}</div>
        <div id="session-label">
          <i id="session-decrement" className="fas fa-minus-circle" onClick={setTimer}></i>Session length
          <i id="session-increment" className="fas fa-plus-circle" onClick={setTimer}></i>
        </div>
        <div id="session-length">{session}</div>
      </main>
    </div>
  );
}

export default App;
