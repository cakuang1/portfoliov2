import React from 'react';
import ReactMarkdown from 'react-markdown';
import 'github-markdown-css/github-markdown.css';
import remarkGfm from 'remark-gfm';


interface markdown {
  markdownContent : string;
  }



  const MarkdownComponent: React.FC<markdown> = ({ markdownContent}) => {

  return (
    <div className='markdown-body'>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdownContent}</ReactMarkdown>
    </div>
  );
}

export default MarkdownComponent;
