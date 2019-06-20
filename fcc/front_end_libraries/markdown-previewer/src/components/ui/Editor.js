import React from 'react';
import '../../styles/Editor.scss';

const Editor = ({ markdown, editing, createMarkDown, createHTML, edit }) => {
  const handleChange = event => {
    createMarkDown(event.target.value);
    createHTML(event.target.value);
  };

  const handleClick = () => edit(editing);

  return (
    <div className="editor">
      <header>
        <h2>Editor</h2>
        <div className="sizing">
          {editing ? (
            <i
              className="fas fa-compress-arrows-alt fa-lg"
              onClick={handleClick}
            />
          ) : (
            <i
              className="fas fa-expand-arrows-alt fa-lg"
              onClick={handleClick}
            />
          )}
        </div>
      </header>
      <textarea
        id="editor"
        value={markdown}
        onChange={handleChange}
        cols="30"
        rows={editing ? 35 : 0}
      />
    </div>
  );
};

export default Editor;
