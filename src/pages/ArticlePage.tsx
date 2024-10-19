import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ArticleContent from '../components/ArticleContent/ArticleContent';
import "../styles/Article.scss";
import ArticleHeader from '../components/ArticleHeader/ArticleHeader';
import ArticleFooter from '../components/ArticleFooter/ArticleFooter';
import Prefooter from '../components/Prefooter/Prefooter';

interface Article {
  id: number;
  title: string;
  slug: string;
  content: Content[];
  cover: {
    formats: {
      small: {
        url: string;
      };
      large: {
        url: string;
      };
    };
  };
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

interface Content {
  id: number;
  body: string;
}

const ArticlePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const token = 'b5c7da6970ec2920f76bb27dd5c99f24774a49bc2ff5af35c70ea53b8ca943050c0c8bea8964190029506ddf6658013943c97e74a612a489a01eb92b06cd5a9829d5d626db2773bde474fa5387de90ad2c165a97083f720ca9b9ab963abe9ff4248bccebd5fa9b3025005567efab7bb1e9f10e138db8777b633889ad54d0fa7e'; // Reemplaza con tu Bearer token real

        const response = await fetch(`https://api.lectoresbeta.com/api/articles/${id}?populate[0]=cover&populate[1]=author&populate[2]=author.avatar&populate[3]=categories&populate[4]=content`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        const result = await response.json();
        setArticle(result.data);
        setLoading(false);
      } catch (error) {
        console.error('Error al obtener el artículo:', error);
        setLoading(false);
      }
    };

    fetchArticle();
  }, [id]);

  if (loading) {
    return <p>Cargando artículo...</p>;
  }

  if (!article) {
    return <p>No se encontró el artículo.</p>;
  }

  return (
    <div>
      <div className="l__Article">
        <ArticleHeader article={article} />
        <ArticleContent article={article} />
        <ArticleFooter article={article} />
      </div>
      <Prefooter />
    </div>
  );
}; 

export default ArticlePage;