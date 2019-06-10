import React from 'react';
import Editor from './Editor';
import Preview from './Preview';
import '../styles/App.scss';

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
