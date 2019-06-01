import React from "react";

import "../styles/Quote.scss";

const Quote = ({ quote, author }) => (
  <article>
    <blockquote id="text">{quote}</blockquote>
    <div className="verticalLine">
      <cite id="author">{author}</cite>
    </div>
  </article>
);

export default Quote;
