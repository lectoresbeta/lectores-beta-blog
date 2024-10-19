import React, { useEffect, useState } from 'react';
import '../../styles/LegalPage.scss';
import { Link } from 'react-router-dom';
import Prefooter from '../../components/Prefooter/Prefooter';

const AvisoLegalPage = () => {  
  const [email, setEmail] = useState('');

  useEffect(() => {
    const usuario = 'hola';
    const dominio = 'lectoresbeta.com';
    setEmail(`${usuario}@${dominio}`);
  }, []);

  return (
    <>
      <div className="c__LegalPage">
          <h1>Aviso Legal</h1>
          <p>
              Este sitio web, <strong>Lectores Beta</strong>, es gestionado por Pablo Blanco Rodríguez con la finalidad de ofrecer información y recursos relacionados con la plataforma Lectores Beta, así como recoger suscripciones a nuestra newsletter para mantener informados a los usuarios sobre el avance del proyecto y el contenido de nuestro blog.
          </p>
          
          <h2>Datos del Responsable</h2>
          <p>
              <strong>Responsable del Sitio:</strong> Pablo Blanco Rodríguez<br/>
              <strong>Correo electrónico de contacto:</strong> <a href={`mailto:${email}`}>{email}</a>
          </p>

          <h2>Finalidad del Sitio Web</h2>
          <p>
              El propósito de este sitio web es el de proporcionar información sobre el proyecto <strong>Lectores Beta</strong>, una plataforma sin ánimo de lucro para escritores, así como recoger suscripciones para nuestra newsletter y blog. Los correos electrónicos proporcionados se utilizarán exclusivamente para el envío de las comunicaciones relacionadas con la plataforma y el contenido de interés literario que publicamos en el blog.
          </p>

          <h2>Propiedad Intelectual</h2>
          <p>
              Todo el contenido, textos, imágenes y logotipos que aparecen en este sitio web son propiedad de <strong>Lectores Beta</strong> o se han utilizado con la correspondiente autorización de los propietarios. Queda prohibida la reproducción, distribución o modificación no autorizada de los mismos.
          </p>

          <h2>Política de Privacidad</h2>
          <p>
              Para obtener más información sobre cómo recopilamos y tratamos los datos personales, puedes consultar nuestra <Link to="/politica-privacidad">Política de Privacidad</Link>.
          </p>

          <h2>Exclusión de Responsabilidad</h2>
          <p>
              Aunque nos esforzamos por mantener el contenido de este sitio web actualizado, no garantizamos la exactitud o actualidad de la información publicada. <strong>Lectores Beta</strong> no se hace responsable de los daños o perjuicios derivados del uso de la información contenida en este sitio.
          </p>

          <h2>Enlaces a Terceros</h2>
          <p>
              Este sitio puede contener enlaces a sitios web de terceros. <strong>Lectores Beta</strong> no tiene control sobre esos sitios, por lo que no asume ninguna responsabilidad sobre su contenido ni sobre el uso de los mismos.
          </p>

          <h2>Modificaciones del Aviso Legal</h2>
          <p>
              Nos reservamos el derecho a modificar este Aviso Legal para adaptarlo a cambios legislativos o a las funcionalidades de nuestra web. Cualquier modificación será publicada en esta misma página.
          </p>

          <h2>Contacto</h2>
          <p>
              Si tienes alguna pregunta sobre este Aviso Legal, puedes ponerte en contacto con nosotros en: <a href={`mailto:${email}`}>{email}</a>.
          </p>
      </div>
      <Prefooter />
      </>
);
};

export default AvisoLegalPage;