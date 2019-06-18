import React from 'react';
import Parse from 'react-html-parser';
import '../../styles/Preview.scss';

const Preview = ({ html }) => {
  return (
    <div className="preview">
      <header>
        <h2>Preview</h2>
        <div className="sizing">
          <i className="fas fa-expand-arrows-alt fa-lg" />
          <i className="fas fa-compress-arrows-alt fa-lg" />
        </div>
      </header>
      <div id="preview" className="rendered-html">
        {Parse(html)}
      </div>
    </div>
  );
};

export default Preview;
