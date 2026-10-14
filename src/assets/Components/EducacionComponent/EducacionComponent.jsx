import React from "react";
import "./EducacionComponent.css";

const EducacionComponent = () => {
  const educationData = [
    {
      period: "2020 — 2024",
      title: "Ingeniería en Sistemas Computacionales",
      institution: "Tecnológico de Estudios Superiores de Ixtapaluca",
      description:
        "Especialización en desarrollo de software y web. Primeros puestos académicos y proyectos de grado enfocados en arquitectura de microservicios.",
    },
    {
      period: "2024 — 2025",
      title: "Desarrollo Web Frontend",
      institution: "Meta — Coursera",
      description:
        "Fundamentos de HTML, CSS y JavaScript. Diseño responsivo, accesibilidad web y control de versiones con Git.",
    },
    {
      period: "2025 — 2026",
      title: "Responsive Web Design",
      institution: "freeCodeCamp",
      description:
        "Maquetación con Flexbox y CSS Grid. Creación de interfaces adaptables y buenas prácticas de diseño web moderno.",
    },
  ];

  return (
    <section className="education-section" id="education">
      <div className="education-header">
        <span className="education-pill">EDUCACIÓN</span>
        <h2 className="education-title">Formación Profesional</h2>
        <p className="education-subtitle">Un sólido trasfondo académico.</p>
      </div>

      <div className="timeline-container">
        {/* Línea vertical continua de fondo */}
        <div className="timeline-line"></div>

        {educationData.map((item, index) => (
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
              <p className="timeline-institution">🎓 {item.institution}</p>
              <p className="timeline-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducacionComponent;