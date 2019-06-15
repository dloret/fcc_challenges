import React from 'react';
import Parse from 'react-html-parser';

const Preview = ({ html }) => (
  <div className="preview">
    <h2>Preview</h2>
    <div id="preview">{Parse(html)}</div>
  </div>
);

export default Preview;
