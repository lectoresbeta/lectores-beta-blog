import React, { useEffect, useState, useRef } from 'react';
import { useOutletContext } from 'react-router-dom';
import Hero from '../components/Hero/Hero';
import '../styles/SectionWhite.scss';
import '../styles/SectionDark.scss';
import mockupImage1 from '../assets/app-mockup1.png';
import mockupImage2 from '../assets/app-mockup2.png';
import ArticleCard from '../components/ArticleCard/ArticleCard';
import Quote from '../components/Quote/Quote';
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
  },
  categories: string[];
  publishedAt: string;
}

const quote = {
  content: "Hay muchas personas que escriben como hobby, pero no se atreven a compartir sus relatos. En Lectores Beta recibirás feedback constructivo de lectores apasionados por la lectura y la escritura. La práctica hace que mejores, pero si tienes a alguien que te indica cuáles son tus carencias, puedes mejorar enormemente.",
  authorName: "Pirra Smith",
  authorRole: "Correctora profesional",
};

const HomePage = () => {  
  const { howItWorksSectionRef, testimonialsSectionRef, resourcesSectionRef, prefooterRef } = useOutletContext<{
    howItWorksSectionRef: React.RefObject<HTMLDivElement>;
    testimonialsSectionRef: React.RefObject<HTMLDivElement>;
    resourcesSectionRef: React.RefObject<HTMLDivElement>;
    prefooterRef: React.RefObject<HTMLDivElement>;
  }>();

  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      const token = 'b5c7da6970ec2920f76bb27dd5c99f24774a49bc2ff5af35c70ea53b8ca943050c0c8bea8964190029506ddf6658013943c97e74a612a489a01eb92b06cd5a9829d5d626db2773bde474fa5387de90ad2c165a97083f720ca9b9ab963abe9ff4248bccebd5fa9b3025005567efab7bb1e9f10e138db8777b633889ad54d0fa7e'; // Reemplaza con tu Bearer token real

      try {
        const response = await fetch('https://api.lectoresbeta.com/api/articles?populate[0]=author.avatar&populate[1]=categories&populate[2]=cover&pagination[pageSize]=3&sort[1]=publishedAt:desc', {
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
      <Hero />

      <section className="c__SectionWhite" ref={howItWorksSectionRef}>
        <div className="slim">
          <h2>¿Cómo funciona?</h2>
          <p>
            Recibes lo que das. Nuestro sistema de créditos te permite recibir tanto feedback como
            aportes a la comunidad.
          </p>
          <ul>
            <li>
              <span className="c__SectionWhite__Number">1.</span>
              <h3>Lee y comenta a cambio de créditos</h3>
              <p>Accede a obras inéditas y comparte tus comentarios y sugerencias con los autores
                para ayudarles a mejorar y obtener créditos.</p>
            </li>
            <li>
              <span className="c__SectionWhite__Number">2.</span>
              <h3>Publica tus escritos y pide feedback</h3>
              <p>Sube tu propia obra y utiliza tus créditos para recibir feedback personalizado de
                lectores.</p>
            </li>
            <li>
              <span className="c__SectionWhite__Number">3.</span>
              <h3>Mejora tu obra con el feedback recibido</h3>
              <p>Usa los comentarios y sugerencias que recibas para pulir tu obra, mejorar la trama,
                los personajes y el estilo.</p>
            </li>
          </ul>
        </div>
      </section>

      <section className="c__SectionDark">
        <div>
          <div>
            <h3>Lee obra inédita personalizada según tus intereses</h3>
            <p>
              Sumérgete en una experiencia literaria única con obras inéditas creadas exclusivamente
              según tus intereses, donde cada relato, personaje y trama se ajustan a tus gustos y te
              llevan a explorar nuevos mundos diseñados solo para ti.
            </p>
          </div>
          <img src={mockupImage1} alt="Mockup" />
        </div>
      </section>

      <section className="c__SectionWhite" ref={resourcesSectionRef}>
        <div>
          <h2>Los mejores recursos para escritores</h2>
          <p>
            Suscríbete a nuestro blog y podrás estar al tanto de recursos para escritores, novedades,
            convocatorias de concursos, workshops de escritura, etc.
          </p>

          {loading ? (
            <p>Cargando artículos...</p> // Mensaje de carga
          ) : (
            <div className="c__SectionWhite__Articles">
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
                  publishedAt={article.publishedAt}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="c__SectionDark">
        <div>
          <img src={mockupImage2} alt="Mockup" />
          <div className='pl-120'>
            <h3>Muéstrate al mundo con tu perfil de autor</h3>
            <p>
              Organiza tus escritos en tu espacio personalizado. Comparte tu biografía, obras anteriores
              y logros para darte a conocer y conecta con nuevos lectores y seguidores.
            </p>
          </div>
        </div>
      </section>

      <section className="c__SectionWhite" ref={testimonialsSectionRef}>
        <div>
          <h2>Dicen de nosotros</h2>
          <Quote
            content={quote.content}
            authorName={quote.authorName}
            authorRole={quote.authorRole}
          />
        </div>
      </section>
      
      <Prefooter />
    </div>
  );
};

export default HomePage;