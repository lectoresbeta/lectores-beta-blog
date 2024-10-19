import React, { useState } from 'react';
import { Checkbox, Modal, Popover, message } from 'antd';
import './SubscribeForm.scss';
import Button from '../Button/Button';
import Message from '../Message/Message';

const SubscribeForm = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const token = 'b5c7da6970ec2920f76bb27dd5c99f24774a49bc2ff5af35c70ea53b8ca943050c0c8bea8964190029506ddf6658013943c97e74a612a489a01eb92b06cd5a9829d5d626db2773bde474fa5387de90ad2c165a97083f720ca9b9ab963abe9ff4248bccebd5fa9b3025005567efab7bb1e9f10e138db8777b633889ad54d0fa7e';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!acceptedTerms) {
      message.error('Debes aceptar los términos y condiciones para continuar.');
      return;
    }

    try {
      const response = await fetch('https://api.lectoresbeta.com/api/leads', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          data: {
            email: email,
          },
        }),
      });

      if (response.ok) {
        setSubmitted(true);
      }
    } catch (error) {
      message.error('Error en la solicitud');
    }
  };

  const termsContent = (
    <div>
      <p>Al aceptar los términos, consientes en recibir correos electrónicos relacionados con nuestras actividades.</p>
    </div>
  );

  const handleOk = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="c__SubscribeForm__Wrapper">
      {submitted ? (
        <Message>
          Muchas gracias. Te has suscrito correctamente.
        </Message>
      ) : ( 
        <form className='c__SubscribeForm' onSubmit={handleSubmit}>
          <div>
            <input
              type='email'
              placeholder='Ingresa tu email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button type="submit" className="primary">Sí, quiero</Button>  
          </div>

          <div className="c__SubscribeForm__Terms">
            <label>
              <Checkbox checked={acceptedTerms} onChange={(e) => setAcceptedTerms(e.target.checked)} required />
                <span style={{ marginLeft: '5px' }}> He leído y acepto la <a href="/politica-privacidad" target="_blank" style={{ cursor: 'pointer', textDecoration: 'underline' }}>política de privacidad</a></span>
            </label>
          </div>
        </form>
      )}
    </div>
  );
};

export default SubscribeForm;