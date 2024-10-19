import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.scss';
import Button from '../Button/Button';
import SubscribeForm from '../SubscribeForm/SubscribeForm';
import heroImage from '../../assets/hero-image.png';
import { SafetyCertificateOutlined, SettingOutlined, EuroOutlined } from '@ant-design/icons';

const Hero = () => {

  return (
    <section className='c__Hero'>
      <div>
        <div>
          <h2>Mejora tus obras<br/>con lectores beta</h2>
          <p>Desarrolla tus habilidades con el feedback de<br/>otros escritores y crea tu propia comunidad</p>
          <p className='c__Hero__Highlighted'>Déjanos tu email y te avisamos del lanzamiento</p>
          <SubscribeForm />
        </div>
        <div>
          <img src={heroImage} />
        </div>
      </div>
      <div className='c__Hero__threeColumns'>
        <div className='c__Hero__threeColumns__Block'>
          <EuroOutlined />
          <h3>Gratuita</h3>
          <p>Sin planes de pago, sin publicidad, sin herramientas restringidas. Totalmente gratuita, libre y abierta.</p>
        </div>
        <div className='c__Hero__threeColumns__Block'>
          <SettingOutlined />
          <h3>Personalizable</h3>
          <p>Personaliza el feedback que deseas recibir enfocando al lector en los puntos que más te interesan.</p>
        </div>
        <div className='c__Hero__threeColumns__Block'>
          <SafetyCertificateOutlined />
          <h3>Segura</h3>
          <p>Tus textos son tuyos y lo seguirán siendo. No ejercemos ningún tipo de propiedad ni derechos sobre el contenido que subas.</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
