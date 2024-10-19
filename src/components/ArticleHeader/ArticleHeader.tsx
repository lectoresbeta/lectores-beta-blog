import React from 'react';
import { marked } from 'marked';
import "./ArticleHeader.scss";
import AuthorAvatar from '../AuthorAvatar/AuthorAvatar';
import Author from '../Author/Author';
import Tag from '../Tag/Tag';


interface Article {
  title: string;
  author: {
    name: string;
    link: string;
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

const ArticleHeader: React.FC<ArticleContentProps> = ({ article }) => {
  const formattedDate = new Date(article.publishedAt).toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return (
    <div className="c__ArticleHeader">
      <h1>{article.title}</h1>
      <div className="c__ArticleHeader__Data">
        <Author 
          avatarUrl={article.author.avatar.formats.small.url} 
          name={article.author.name} 
          link={article.author.link}
        />
        <span className="c__ArticleHeader__Data__PublishedAt">{formattedDate}</span>
        <div className="c__ArticleHeader__Data__Categories">
          {article.categories.map((tag, index) => (
            <Tag key={tag.id}>{tag.name}</Tag>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticleHeader;