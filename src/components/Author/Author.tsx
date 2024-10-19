import React from 'react';
import AuthorAvatar from '../AuthorAvatar/AuthorAvatar.tsx';
import './Author.scss';

interface AuthorProps {
  avatarUrl: string;
  name: string;
  link: string;
}

const Author: React.FC<AuthorProps> = ({ avatarUrl, name, link }) => {

  return (
    <a href={link} target='_blank' className="c__Author">
      <AuthorAvatar imageUrl={avatarUrl} />
      <span>{name}</span>
    </a>
  );
};

export default Author;