import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import logo from '../../assets/isotipo.svg';
import Button from '../Button/Button';

const Header = ({ scrollToSection }: { scrollToSection: (section: string) => void }) => {
  const handleClick = () => {
    console.log('Botón clicado');
  };

  return (
    <header className='c__Header'>
      <div>
      <Link to="/" className='c__Header__logo'>
        <div className='c__Header__logo__isotipo'>
          <img src={logo} alt="Lectores Beta" />
        </div>
        <h1>lectores<strong>beta</strong></h1>
      </Link>
      <div className='c__Header__menu'>        
        <nav>
          <ul>
            <li>
              <Link to="recursos" >Recursos</Link>
            </li>
          </ul>
        </nav>
        <Button onClick={() => scrollToSection('prefooter')}>Avísame del lanzamiento</Button>    
      </div>
      </div>
    </header>
  );
};

export default Header;
