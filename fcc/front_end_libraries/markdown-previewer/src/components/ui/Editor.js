import React from 'react';
import '../../styles/Editor.scss';

const Editor = ({ markdown, createMarkDown, createHTML }) => {
  const handleChange = event => {
    createMarkDown(event.target.value);
    createHTML(event.target.value);
  };

  return (
    <div className="editor">
      <header>
        <h2>Editor</h2>
        <div className="sizing">
          <i className="fas fa-expand-arrows-alt fa-lg" />
          <i className="fas fa-compress-arrows-alt fa-lg" />
        </div>
      </header>
      <textarea
        id="editor"
        value={markdown}
        onChange={handleChange}
        cols="30"
        rows="10"
      />
    </div>
  );
};

export default Editor;
