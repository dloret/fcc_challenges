import React from 'react';
import Parse from 'react-html-parser';
import '../../styles/Preview.scss';

const Preview = ({ html, editing, edit }) => {
  const size = {};
  if (editing) {
    size.maxHeight = '5vh';
    size.overflow = 'hidden';
  }

  const handleClick = () => edit(editing);

  return (
    <div className="preview">
      <header>
        <h2>Preview</h2>
        <div className="sizing">
          {editing ? (
            <i
              className="fas fa-expand-arrows-alt fa-lg"
              onClick={handleClick}
            />
          ) : (
            <i
              className="fas fa-compress-arrows-alt fa-lg"
              onClick={handleClick}
            />
          )}
        </div>
      </header>
      <div id="preview" className="rendered-html" style={size}>
        {Parse(html)}
      </div>
    </div>
  );
};

export default Preview;
