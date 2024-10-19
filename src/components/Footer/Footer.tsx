import React, { useEffect, useState } from 'react';
import './Footer.scss';
import logo from '../../assets/imagotipo.svg';
import { FacebookOutlined, InstagramOutlined, XOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    const usuario = 'hola';
    const dominio = 'lectoresbeta.com';
    setEmail(`${usuario}@${dominio}`);
  }, []);

  return (
    <footer className="c__Footer">
      <div>
        <div>
          <img src={logo} alt="Lectores Beta" />
        </div>
        <div className="c__Footer__Socials">
          <a href="https://www.facebook.com/LectoresBeta" target="_blank">
            <FacebookOutlined />
          </a>
          <a href="https://x.com/LectoresBeta" target="_blank">
            <XOutlined />
          </a>
          <a href="https://www.instagram.com/lectores_beta/" target="_blank">
            <InstagramOutlined />
          </a>
        </div>
      </div>
      <hr/>
      <div>
        <ul>
          <li><Link to="/politica-privacidad">Privacidad</Link></li>
          <li><Link to="/cookies">Cookies</Link></li>
          <li><Link to="/aviso-legal">Legal</Link></li>
          <li><a href={`mailto:${email}`}>Contacto</a></li>
        </ul>
        <span>© 2024 Lectores Beta</span>
      </div>
    </footer>
  );
};

export default Footer;
