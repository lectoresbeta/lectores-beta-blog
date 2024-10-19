import React from 'react';
import "./ArticleFooter.scss";
import AuthorAvatar from '../AuthorAvatar/AuthorAvatar';


interface Article {
  title: string;
  author: {
    name: string;
    link: string;
    bio: string;
    avatar: {
      formats: {
        thumbnail: {
          url: string;
        };
        small: {
          url: string;
        };
      };
    };
  };
  publishedAt: string;  
  categories: Category[];
}

interface Category {
  id: number;
  name: string;
}

interface ArticleContentProps {
  article: Article;
}

const ArticleFooter: React.FC<ArticleContentProps> = ({ article }) => {
  const formattedDate = new Date(article.publishedAt).toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return (
    <div className="c__ArticleFooter">
      <AuthorAvatar imageUrl={article.author.avatar.formats.small.url} />
      <div>
        <strong>Escrito por: {article.author.name}</strong>
        <br/>
        <br/>
        <p>
          {article.author.bio}
        </p>
        <div className="c__ArticleFooter__Visit">
          <a className="c__Button" href={article.author.link} target='_blank'>Visitar web</a>
        </div>
      </div>
    </div>
  );
};

export default ArticleFooter;