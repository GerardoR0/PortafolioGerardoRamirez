import React, { useState } from "react";
import "./NavbarComponent.css";

const NavbarComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="navbar">
      <div className="logo">
        <span className="logo-main">Gera</span>
        <span className="logo-accent">.dev</span>
      </div>
      {/*menu hamburguesa*/}
      <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`navbar-links ${isOpen ? "open" : ""}`}>
        <li>Sobre mi</li>
        <li>Educacion</li>
        <li>Proyectos</li>
        <li>Herramientas</li>
        <li>Experiencia</li>
        <li>Contacto</li>
      </ul>
    </nav>
  );
};

export default NavbarComponent;
