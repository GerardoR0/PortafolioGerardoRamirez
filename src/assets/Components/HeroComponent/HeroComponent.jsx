import React from "react";
import "./HeroComponent.css";
import profileImage from "../../../assets/profile-image.jpeg";

const HeroComponent = () => {
  return (
    <section className="hero-container">
      {/*Contenido Izquierda*/}
      <div className="hero-left">
        <div className="hero-status">
          <span className="status-dot"></span>
          <span>DISPONIBLE PARA NUEVOS PROYECTOS</span>
        </div>

        <h1 className="hero-title">
          Hola, soy <span className="hero-title-accent">Gerardo Ramírez</span>
        </h1>
        <h2 className="hero-subtitle">Desarrollador Full Stack</h2>
        <p className="hero-description">
          Especializado en construir experiencias digitales de alto rendimiento,
          escalables y con un diseño impecable. De extremo a extremo, del
          servidor a la interfaz del usuario.
        </p>
        <a href="#contact" className="contact-button">
          Contáctame <span>&rarr;</span>
        </a>
      </div>

      {/*Contenido Derecha*/}
      <div className="hero-right">
        <div className="profile-image-container">
          <img
            src={profileImage}
            alt="Gerardo Ramírez"
            className="profile-image"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroComponent;