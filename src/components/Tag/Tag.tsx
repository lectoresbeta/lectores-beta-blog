import React from 'react';
import AuthorAvatar from '../AuthorAvatar/AuthorAvatar.tsx';
import './Tag.scss';

const Tag = ({ children }) => {

  return (
    <span className="c__Tag">{children}</span>
  );
};

export default Tag;