import React, { useEffect, useState } from 'react';
import '../../styles/LegalPage.scss';
import { Link } from 'react-router-dom';

const PoliticaPrivacidadPage = () => {  
  const [email, setEmail] = useState('');

  useEffect(() => {
    const usuario = 'hola';
    const dominio = 'lectoresbeta.com';
    setEmail(`${usuario}@${dominio}`);
  }, []);

  return (
    <div className="c__LegalPage">
      <h1>Política de Privacidad</h1>

      <p>En <strong>Lectores Beta</strong>, respetamos tu privacidad y nos comprometemos a proteger los datos personales que compartes con nosotros. Esta Política de Privacidad explica cómo recopilamos, utilizamos y protegemos tu información cuando interactúas con nuestra plataforma.</p>

      <h2>1. Responsable del Tratamiento de Datos</h2>
      <p>
          El responsable del tratamiento de los datos personales recogidos en este sitio web es [Tu Nombre o Entidad]. Puedes contactar con nosotros en:
      </p>
      <ul>
          <li><strong>Correo electrónico:</strong> <a href={`mailto:${email}`}>{email}</a></li>
      </ul>

      <h2>2. Datos que Recopilamos</h2>
      <p>
          Los únicos datos personales que recopilamos son los siguientes:
      </p>
      <ul>
          <li><strong>Correo electrónico:</strong> al suscribirte a nuestra newsletter y blog.</li>
      </ul>

      <h2>3. Finalidad del Tratamiento</h2>
      <p>
          Utilizamos tu correo electrónico exclusivamente para las siguientes finalidades:
      </p>
      <ul>
          <li>Enviar actualizaciones y novedades sobre la plataforma <strong>Lectores Beta</strong>.</li>
          <li>Informarte sobre el lanzamiento oficial de la plataforma.</li>
          <li>Enviarte artículos y novedades del blog relacionados con el mundo de la escritura y la literatura.</li>
      </ul>
      <p>No utilizamos tus datos personales para fines publicitarios ni los compartimos con terceros.</p>

      <h2>4. Base Jurídica para el Tratamiento de los Datos</h2>
      <p>
          La base legal para el tratamiento de tus datos es el <strong>consentimiento</strong> que nos proporcionas al suscribirte a nuestra newsletter o blog. Puedes retirar tu consentimiento en cualquier momento, lo que implicará que dejaremos de enviarte comunicaciones.
      </p>

      <h2>5. Derechos del Usuario</h2>
      <p>
          Como usuario, tienes derecho a:
      </p>
      <ul>
          <li><strong>Acceder</strong> a tus datos personales.</li>
          <li><strong>Rectificar</strong> los datos inexactos o incompletos.</li>
          <li><strong>Solicitar la eliminación</strong> de tus datos cuando ya no sean necesarios para los fines para los que fueron recogidos.</li>
          <li><strong>Oponerte</strong> al tratamiento de tus datos o solicitar la <strong>limitación</strong> del mismo.</li>
          <li><strong>Retirar tu consentimiento</strong> en cualquier momento.</li>
      </ul>
      <p>Para ejercer cualquiera de estos derechos, puedes contactarnos en: <a href={`mailto:${email}`}>{email}</a>.</p>

      <h2>6. Conservación de los Datos</h2>
      <p>
          Conservaremos tus datos personales mientras sigas suscrito a nuestra newsletter y blog. Si en cualquier momento decides darte de baja, eliminaremos tus datos de nuestras bases de datos de forma segura.
      </p>

      <h2>7. Seguridad de los Datos</h2>
      <p>
          Implementamos medidas técnicas y organizativas para garantizar la seguridad de tus datos personales y evitar su pérdida, mal uso o acceso no autorizado.
      </p>

      <h2>8. Cookies</h2>
      <p>
          Nuestro sitio web utiliza cookies únicamente para fines estadísticos a través de Google Analytics. Para más información sobre cómo utilizamos las cookies, puedes consultar nuestra <Link to="/cookies">Política de Cookies</Link>.
      </p>

      <h2>9. Modificaciones de la Política de Privacidad</h2>
      <p>
          Nos reservamos el derecho a modificar esta Política de Privacidad para adaptarla a nuevos requisitos legislativos o cambios en nuestra web. Cualquier cambio será publicado en esta misma página.
      </p>

      <h2>10. Contacto</h2>
      <p>
          Si tienes alguna duda o consulta sobre esta Política de Privacidad, no dudes en contactarnos en: <a href={`mailto:${email}`}>{email}</a>.
      </p>
    </div>
);
};

export default PoliticaPrivacidadPage;