import React from "react";
import "./SobreMiComponent.css"; 

const SobreMiComponent = () => {
  return (
    <section className="about-section" id="about">
      {/* Encabezado Principal */}
      <div className="about-header">
        <span className="about-pill">SOBRE MÍ</span>
        <h2 className="about-title">Ingeniería y Creatividad Combinadas</h2>
        <p className="about-subtitle">
          Entiendo el desarrollo no solo como escribir código, sino como la
          arquitectura de soluciones efectivas para problemas reales.
        </p>
      </div>

      {/* Contenido en 2 columnas */}
      <div className="about-grid">
        {/* Columna Izquierda: Texto */}
        <div className="about-text-column">
          <p className="about-highlight">
            Mi objetivo es unir el poder del backend con la sutileza de una
            interfaz moderna y fluida. Cuento con experiencia en el desarrollo
            técnico de plataformas de software.
          </p>
          <p className="about-paragraph">
            Durante los últimos años, he trabajado en el diseño para dar vida a
            aplicaciones robustas; Refactorizar arquitecturas heredadas y garantizar
            integraciones fluidas.
          </p>
          <p className="about-paragraph">
            Creo en el aprendizaje continuo, las buenas prácticas, el clean code
            y un ambiente colaborativo enfocado en resultados de alto nivel.
          </p>
        </div>

        {/* Columna Derecha: Tarjetas de Estadísticas */}
        <div className="about-cards-column">
          {/* Tarjeta 1 */}
          <div className="about-card">
            <div className="card-icon-box">
              {/* Reemplaza con tu SVG o icono de Lucide/React-Icons */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#06B6D4"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
              </svg>
            </div>
            <div className="card-content">
              <h3>
                <span>+3</span> Años de Experiencia
              </h3>
              <p>Desarrollando soluciones de software robustas y escalables.</p>
            </div>
          </div>

          {/* Tarjeta 2 */}
          <div className="about-card">
            <div className="card-icon-box">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#06B6D4"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
            </div>
            <div className="card-content">
              <h3>
                <span>+10</span> Proyectos Completados
              </h3>
              <p>
                Desde aplicaciones SaaS complejas hasta landing pages de alta
                conversión.
              </p>
            </div>
          </div>

          {/* Tarjeta 3 */}
          <div className="about-card">
            <div className="card-icon-box">
              <svg
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="#06B6D4" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <circle cx="12" cy="8" r="6" />
                <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
              </svg>
            </div>
            <div className="card-content">
              <h3>
                <span>+3</span> Áreas de Especialización
              </h3>
              <p>Frontend, Backend, UX/UI, desarrollo de soluciones web, desarrollo de API's</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreMiComponent;
