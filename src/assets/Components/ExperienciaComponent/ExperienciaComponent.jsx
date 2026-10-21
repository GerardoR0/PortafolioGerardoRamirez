import React from 'react'
import './ExperienciaComponent.css'

const ExperienciaComponent = () => {
  const experienceData = [
    {
      period: "2023 — 2025",
      title: "Frontend Developer",
      company: "FasdaTec",
      description:
        "Diseñé interfaces centradas en la experiencia de usuario (UX/UI) utilizando Figma, creando prototipos interactivos y flujos de navegación para aplicaciones web.",
    },
    {
      period: "2025 — 2026",
      title: "Full Stack Developer",
      company: "Grupo Salinas",
      description:
        "Desarrollé componentes reutilizables con React y JavaScript, reduciendo los tiempos de carga de la interfaz mediante optimización de renderizado y reutilización de código.",
    }
  ];

  return (
    <section className="experience-section" id="experience">
      <div className="experience-header">
        <span className="experience-pill">EXPERIENCIA</span>
        <h2 className="experience-title">Experiencia Laboral</h2>
        <p className="experience-subtitle">Un recorrido detallado de mi trayectoria y roles clave en diferentes organizaciones y proyectos de desarrollo.</p>
      </div>

      <div className="timeline-container">
        {/* Línea vertical continua de fondo */}
        <div className="timeline-line"></div>

        {experienceData.map((item, index) => (
          <div
            key={index}
            className={`timeline-row ${index % 2 === 0 ? "left-card" : "right-card"}`}
          >
            {/* 1. Fecha */}
            <div className="timeline-date">{item.period}</div>

            {/* 2. Punto Central */}
            <div className="timeline-dot-wrapper">
              <div className="timeline-dot"></div>
            </div>

            {/* 3. Tarjeta */}
            <div className="timeline-card">
              <h3>{item.title}</h3>
              <p className="timeline-institution">🎓 {item.company}</p>
              <p className="timeline-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienciaComponent