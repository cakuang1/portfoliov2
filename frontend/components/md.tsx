import React from 'react';
import ReactMarkdown from 'react-markdown';

function MarkdownComponent() {
  const markdownContent = `
  ![React Logo](https://reactjs.org/logo-og.png)

  This is an example of an image in Markdown.
  ![Image 2](/avatar.svg)
  `;

  return (
    <div>
      <ReactMarkdown>{markdownContent}</ReactMarkdown>
    </div>
  );
}

export default MarkdownComponent;
