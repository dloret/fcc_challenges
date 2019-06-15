import React from 'react';

const Editor = ({ markdown, createMarkDown, createHTML }) => {
  const handleChange = event => {
    createMarkDown(event.target.value);
    createHTML(event.target.value);
  };

  return (
    <div className="editor">
      <h2>Editor</h2>
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
