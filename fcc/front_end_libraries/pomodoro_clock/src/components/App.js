import React, {useState} from 'react';

import '../../node_modules/@fortawesome/fontawesome-free/css/all.css';
import '../style/App.css';

function App() {
  const [session, setSession] = useState(25);
  const [pause, setPause] = useState(5);
  const [timerLabel, setTimerLabel] = useState('Session');
  const [sessionPlaying, setSessionPlaying] = useState(false);
  const [breakPlaying, setBreakPlaying] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Pomodoro Clock</h1>
      </header>
      <main>
        <p id="timer-label">{timerLabel}</p>
        <p id="time-left">{breakPlaying ? pause : session}</p>
        <p id="start_stop"><i class="fas fa-play-circle"><i class="fas fa-pause-circle"></i></i></p>
        <p id="reset"><i class="fas fa-stop-circle"></i></p>
        <p id="break-label"><i id="break-decrement" class="fas fa-minus-circle"></i> Break length <i id="break-increment" class="fas fa-plus-circle"></i></p>
        <p id="break-length">{pause}</p>
        <p id="session-label"><i id="break-decrement" class="fas fa-minus-circle"></i> Session length <i id="break-increment" class="fas fa-plus-circle"></i></p>
        <p id="session-length">{session}</p>
      </main>
    </div>
  );
}

export default App;
