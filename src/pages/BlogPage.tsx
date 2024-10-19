import React, { useEffect, useState } from 'react';
import '../styles/SectionWhite.scss';
import '../components/ArticlesGrid/ArticlesGrid.scss';
import ArticleCard from '../components/ArticleCard/ArticleCard';
import Prefooter from '../components/Prefooter/Prefooter';

interface Article {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  cover: {
    formats: {
      thumbnail: {
        url: string;
      };
      small: {
        url: string;
      };
    };
  };
  author: {
    name: string;
    avatarUrl: string;
    link: string;
  },
  categories: string[];
  publishedAt: string;
}


const BlogPage = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      const token = 'b5c7da6970ec2920f76bb27dd5c99f24774a49bc2ff5af35c70ea53b8ca943050c0c8bea8964190029506ddf6658013943c97e74a612a489a01eb92b06cd5a9829d5d626db2773bde474fa5387de90ad2c165a97083f720ca9b9ab963abe9ff4248bccebd5fa9b3025005567efab7bb1e9f10e138db8777b633889ad54d0fa7e'; // Reemplaza con tu Bearer token real

      try {
        const response = await fetch('https://api.lectoresbeta.com/api/articles?populate[0]=author.avatar&populate[1]=categories&populate[2]=cover&pagination[pageSize]=9&sort[1]=publishedAt:desc', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        const result = await response.json();

        const data: Article[] = result.data.map((item: any) => ({
          id: item.id,
          documentId: item.documentId,
          title: item.title,
          slug: item.slug,
          cover: {
            formats: {
              thumbnail: {
                url: item.cover.formats.thumbnail.url,
              },
              small: {
                url: item.cover.formats.small.url,
              },
            },
          },
          author: {
            name: item.author?.name || 'Autor desconocido',
            avatarUrl: item.author?.avatar?.formats?.thumbnail?.url || 'default-avatar.jpg',
            link: item.author?.link,
          },
          categories: item.categories ? item.categories.map((category: any) => category.name) : [],
          publishedAt: item.publishedAt,
        }));


        setArticles(data);
      } catch (error) {
        console.error('Error al obtener los artículos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div>
      <div className='c__SectionWhite'>
        <div className="slim">  
          <h2>Recursos para escritores</h2>
          <p>Suscríbete para estar al tanto de los mejores recursos para escritores, novedades, convocatorias
            de concursos, workshops de escritura, etc.</p>
        </div>
      </div>

      <div className="c__ArticlesGrid">
        {loading ? (
              <p>Cargando artículos...</p>
            ) : (
              <div>
                {articles.map((article) => (
                  <ArticleCard
                    key={article.id}
                    id={article.documentId}
                    title={article.title}
                    tags={article.categories}
                    slug={article.slug}
                    imageUrl={article.cover.formats.small.url}
                    authorAvatarUrl={article.author.avatarUrl}
                    authorName={article.author.name}
                    authorLink={article.author.link}
                    publishedAt={article.publishedAt}
                  />
                ))}
              </div>
            )}
      </div>

      <Prefooter />
    </div>
  );
};

export default BlogPage;
