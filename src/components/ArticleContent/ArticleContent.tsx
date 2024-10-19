import React from 'react';
import { marked } from 'marked';
import "./ArticleContent.scss";

interface Content {
  id: number;
  body: string;
}

interface Article {
  title: string;
  content: Content[];
  cover: {
    formats: {
      large: {
        url: string;
      };
    };
  };
}

interface ArticleContentProps {
  article: Article;
}

const ArticleContent: React.FC<ArticleContentProps> = ({ article }) => {
  if (!article.content || article.content.length === 0) {
    return <p>No hay contenido disponible.</p>;
  }

  return (
    <div className="c__ArticleContent">
      <img className="c__ArticleContent__Cover" src={article.cover.formats.large.url} alt={article.title} />
      {article.content.map((contentItem) => (
        <div key={contentItem.id} className="content-item">
          <div
            dangerouslySetInnerHTML={{ __html: marked(contentItem.body) }}
          />
        </div>
      ))}
    </div>
  );
};

export default ArticleContent;