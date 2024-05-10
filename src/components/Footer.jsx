import React from 'react';
import '../stylesSheets/Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container-icons">
        <div className="social-icons">
          <a href="https://github.com/catfredo" target="_blank">
            <img src="https://github.com/favicon.ico" alt="GitHub" width="50" height="50"/>
          </a>
          <a href="https://www.linkedin.com/in/gomezluis/" target="_blank">
            <img src="https://linkedin.com/favicon.ico" alt="LinkedIn" width="50" height="50"/>
          </a>
        </div>
        <p>&copy; 2024 Tu Nombre. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
