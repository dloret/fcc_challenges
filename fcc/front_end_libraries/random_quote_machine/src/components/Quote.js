import React from "react";

const Quote = ({ quote, author }) => (
  <article>
    <blockquote id="text">{quote}</blockquote>
    <cite id="author">{author}</cite>
  </article>
);

export default Quote;
