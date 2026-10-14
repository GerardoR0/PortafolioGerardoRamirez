import React from "react";
import "./ProyectosComponent.css";
import miPortafolio from "../../../assets/miPortafolio.png";
import generadorCitas from "../../../assets/generadorDeCitas.png";
import rickAndMorty from "../../../assets/rickAndMorty.png";

const ProyectosComponent = () => {
  const projectsData = [
    {
      title: "Mi Portafolio",
      description:
        "Plataforma web personal para exhibir proyectos e hitos profesionales. Construida con arquitectura modular, interfaz interactiva totalmente responsiva, modo oscuro y optimización de rendimiento en carga.",
      tags: ["React", "Node.js", "MongoDB"],
      image: miPortafolio, 
      linkUrl: "#",
      githubUrl: "https://github.com/GerardoR0/PortafolioGerardoRamirez",
    },
    {
      title: "Generador de Citas",
      description:
        "Plataforma web para reserva y gestión de citas. Implementa lógica de agenda dinámica y consumo de endpoints optimizados para respuesta inmediata.",
      tags: ["JavaScript", "Vue.js", "React"],
      image: generadorCitas, 
      linkUrl: "https://citas-lac.vercel.app",
      githubUrl: "https://github.com/GerardoR0/Citas",
    },
    {
      title: "Consumo de API",
      description:
        "Aplicación web interactiva que consume la API de Rick and Morty para explorar personajes, episodios y ubicaciones. Implementa búsqueda en tiempo real, paginación dinámica, filtrado por estado/especie y manejo de estados asíncronos.",
      tags: ["React", "JavaScript"],
      image: rickAndMorty,
      linkUrl: "https://ejercicio-frontend.vercel.app",
      githubUrl: "https://github.com/GerardoR0/EjercicioFrontend",
    },
  ];

  return (
    <section className="projects-section" id="projects">
      <div className="projects-header">
        <span className="projects-pill">PROYECTOS</span>
        <h2 className="projects-title">Proyectos Realizados</h2>
        <p className="projects-subtitle">
          Una selección de aplicaciones web construidas con máxima atención al
          rendimiento, seguridad y diseño.
        </p>
      </div>

      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div className="project-card" key={index}>
            {/* Barra superior estilo macOS */}
            <div className="mac-bar">
              <span className="mac-dot close"></span>
              <span className="mac-dot minimize"></span>
              <span className="mac-dot expand"></span>
            </div>

            {/* Imagen del Proyecto */}
            <div className="project-image-container">
              <img src={project.image} alt={project.title} className="project-image" />
            </div>

            {/* Contenido */}
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="project-tag">{tag}</span>
                ))}
              </div>

              <div className="project-links">
                <a href={project.linkUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                  Ver Proyecto 
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                </a>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link github-link">
                  GitHub
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProyectosComponent;