import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.scss';
import Button from '../Button/Button';
import SubscribeForm from '../SubscribeForm/SubscribeForm';
import heroImage from '../../assets/hero-image.png';
import { SafetyCertificateOutlined, SettingOutlined, EuroOutlined } from '@ant-design/icons';
import { IconCurrencyEuro, IconCurrencyEuroCircle, IconFileLock02, IconSettings02 } from 'untitled-ui-icons';

const Hero = () => {

  return (
    <section className='c__Hero'>
      <div>
        <div className='c__Hero__Title'>
          <div>
          <h2>Mejora tus obras con lectores beta</h2>
          <p>Desarrolla tus habilidades con el feedback de otros escritores y crea tu propia comunidad</p>
          </div>
        </div>
        <div className="c__Hero__Form">  
          <p className='c__Hero__Highlighted'>Déjanos tu email y te avisamos del lanzamiento</p>         
          <SubscribeForm />
        </div>
        <div className="c__Hero__Image">
          <img src={heroImage} />
        </div>
        <div className='c__Hero__threeColumns__Block c__Hero__Info1'>
          <IconCurrencyEuroCircle width={32} height={32} />
          <h3>Gratuita</h3>
          <p>Sin planes de pago, sin publicidad, sin herramientas restringidas. Totalmente gratuita, libre y abierta.</p>
        </div>
        <div className='c__Hero__threeColumns__Block c__Hero__Info2'>
          <IconSettings02 width={32} height={32} />
          <h3>Personalizable</h3>
          <p>Personaliza el feedback que deseas recibir enfocando al lector en los puntos que más te interesan.</p>
        </div>
        <div className='c__Hero__threeColumns__Block c__Hero__Info3'>
          <IconFileLock02 width={32} height={32}  />
          <h3>Segura</h3>
          <p>Tus textos son tuyos y lo seguirán siendo. No ejercemos ningún tipo de propiedad ni derechos sobre el contenido que subas.</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
