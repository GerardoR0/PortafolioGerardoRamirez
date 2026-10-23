import React, { useState } from "react";
import "./NavbarComponent.css";

const NavbarComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

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
        <li onClick={handleCloseMenu}><a href="#about">Sobre mi</a></li>
        <li onClick={handleCloseMenu}><a href="#education">Educacion</a></li>
        <li onClick={handleCloseMenu}><a href="#projects">Proyectos</a></li>
        <li onClick={handleCloseMenu}><a href="#skills">Herramientas</a></li>
        <li onClick={handleCloseMenu}><a href="#experience">Experiencia</a></li>
        <li onClick={handleCloseMenu}><a href="#contacto">Contacto</a></li>
      </ul>
    </nav>
  );
};

export default NavbarComponent;
