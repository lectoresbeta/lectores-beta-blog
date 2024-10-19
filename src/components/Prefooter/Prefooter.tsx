import React from 'react';
import { Link } from 'react-router-dom';
import './Prefooter.scss';
import SubscribeForm from '../SubscribeForm/SubscribeForm';
import { useOutletContext } from 'react-router-dom';

const Prefooter = () => {
  const { prefooterRef } = useOutletContext<{
    prefooterRef: React.RefObject<HTMLDivElement>;
  }>();
  return (
    <section className='c__Prefooter' ref={prefooterRef}>
      <div>
        <h2>Encuentra lectores beta<br/>para tu obra</h2>
        <p>Comprueba su valor, mejórala y déjala lista para el siguiente paso mientras construyes tu propia comunidad.</p>
        <h3>Déjanos tu correo y te avisaremos cuando la plataforma esté lista.</h3>
        <SubscribeForm />     
      </div>
    </section>
  );
};

export default Prefooter;
