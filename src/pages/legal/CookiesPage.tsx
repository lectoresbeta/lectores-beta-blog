import React, { useEffect, useState } from 'react';
import '../../styles/LegalPage.scss';

const CookiesPage = () => {  
  const [email, setEmail] = useState('');

  useEffect(() => {
    const usuario = 'hola';
    const dominio = 'lectoresbeta.com';
    setEmail(`${usuario}@${dominio}`);
  }, []);

  return (
    <div className="c__LegalPage">
      <h1>Política de Cookies</h1>
      <p>En <strong>Lectores Beta</strong>, utilizamos cookies para mejorar tu experiencia en nuestra web y analizar el tráfico de la misma. Las cookies que usamos son <strong>exclusivamente con fines estadísticos</strong> a través de Google Analytics. A continuación, te explicamos qué son las cookies, cómo las utilizamos y cómo puedes gestionarlas.</p>

      <h2>1. ¿Qué son las cookies?</h2>
      <p>Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo (ordenador, tablet, smartphone) cuando visitas un sitio web. Estos archivos permiten al sitio web recordar tus preferencias, como el idioma que seleccionas o la configuración de visualización, y ayudan a mejorar tu experiencia.</p>

      <h2>2. ¿Qué tipos de cookies utilizamos?</h2>
      <ul>
          <li><strong>Cookies técnicas:</strong> No utilizamos este tipo de cookies, ya que nuestra web no requiere funcionalidades técnicas adicionales que no se puedan cubrir sin ellas.</li>
          <li><strong>Cookies de análisis:</strong> Utilizamos cookies de Google Analytics para obtener datos anónimos sobre el comportamiento de los usuarios en nuestra web. Nos ayudan a mejorar la plataforma analizando qué secciones son más visitadas o cómo interactúan los usuarios con nuestro contenido.</li>
      </ul>

      <h2>3. Cookies de terceros</h2>
      <p>Usamos Google Analytics, un servicio de análisis web proporcionado por Google Inc. Google utiliza las cookies para recopilar información anónima que nos permite analizar cómo los usuarios navegan por nuestra página y mejorar el servicio. No utilizamos estas cookies con fines publicitarios ni para identificar a los usuarios de manera individual.</p>

      <h2>4. Gestión de cookies</h2>
      <p>En cualquier momento puedes ajustar tus preferencias sobre las cookies a través de las configuraciones de tu navegador. A continuación, te proporcionamos enlaces a las instrucciones para gestionar cookies en los navegadores más utilizados:</p>
      <ul>
          <li><a href="https://support.google.com/chrome/answer/95647?hl=es" target="_blank">Google Chrome</a></li>
          <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank">Mozilla Firefox</a></li>
          <li><a href="https://support.microsoft.com/es-es/help/17442/windows-internet-explorer-delete-manage-cookies" target="_blank">Internet Explorer</a></li>
          <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank">Safari</a></li>
      </ul>

      <h2>5. Aceptación de cookies</h2>
      <p>Al continuar navegando por nuestra página web, aceptas el uso de cookies de acuerdo con esta política. Si decides no aceptar nuestras cookies, puedes seguir utilizando nuestra web, aunque es posible que algunas funciones no estén disponibles.</p>

      <h2>6. Actualización de la política de cookies</h2>
      <p>Nos reservamos el derecho a modificar la presente Política de Cookies para adaptarla a novedades legislativas o a nuevas funcionalidades en nuestra web. Cualquier cambio en la política será comunicado debidamente.</p>

      <p>Si tienes alguna duda sobre nuestra política de cookies, puedes contactarnos en <a href={`mailto:${email}`}>{email}</a>.</p>
    </div>
);
};

export default CookiesPage;