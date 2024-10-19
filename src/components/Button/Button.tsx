import React from 'react';
import './Button.scss';

const Button = ({ children, type = 'button', className = '', onClick = () => {} }) => {
  return (
    <button className={`c__Button ${className}`} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;