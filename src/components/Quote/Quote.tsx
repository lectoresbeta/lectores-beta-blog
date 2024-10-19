import React from 'react';
import './Quote.scss';

interface QuoteProps {
  content: string;
  authorName: string;
  authorRole: string;
}


const Quote: React.FC<QuoteProps> = ({ content, authorName, authorRole }) => {
  return (
    <div className="c__Quote">
      <span className="c__Quote__Mark">”</span>
      <p className="c__Quote__Content">{content}</p>
      <hr/>
      <span className="c__Quote__AuthorName">{authorName}</span>
      <span className="c__Quote__AuthorRole">{authorRole}</span>
    </div>
  );
};

export default Quote;