import React from "react";
import "./FooterComponent.css";
const FooterComponent = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        {/* Logo / Marca */}
        <div className="footer-brand">
          <span className="brand-name">Gera</span>
          <span className="brand-dot">.dev</span>
        </div>

        {/* Mensaje central */}
        <div className="footer-message">
          Hecho con <span className="heart-icon">❤️</span> y código
        </div>

        {/* Derechos reservados */}
        <div className="footer-rights">
          © 2026 Gerardo Ramírez. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;