import React from 'react';
import Editor from '../containers/Editor';
import Preview from '../containers/Preview';
import '../../styles/App.scss';

function App() {
  return (
    <div>
      <header>
        <h1>Markdown previewer</h1>
      </header>
      <main>
        <Editor />
        <Preview />
      </main>
    </div>
  );
}

export default App;
