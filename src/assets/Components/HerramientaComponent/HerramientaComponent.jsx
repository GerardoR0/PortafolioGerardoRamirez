import React from 'react';
import './HerramientaComponent.css';
const HerramientaComponent = () => {

  const skillsData = [
    {
      category: "Frontend Development",
      tools: [
        { name: "React", icon: "⚛️" },
        { name: "Vue", icon: "🟢" },
        { name: "JavaScript", icon: "JS" },
        { name: "CSS", icon: "🎨" },
      ],
    },
    {
      category: "Backend Engineering",
      tools: [
        { name: "Node.js", icon: "🟢" },
        { name: "Python", icon: "🐍" },
        { name: "Java", icon: "☕" },
      ],
    },
    {
      category: "Bases de Datos",
      tools: [
        { name: "MySQL", icon: "🐬" },
        { name: "MongoDB", icon: "🍃" },
      ],
    },
    {
      category: "DevOps & Cloud",
      tools: [
        { name: "Docker", icon: "🐳" },
        { name: "AWS", icon: "☁️" },
        { name: "Git", icon: "🔀" },
        { name: "Jenkins", icon: "🤖" },
      ],
    },
  ];
  return (
    <section className="herramientas-section" id="skills">
      <div className="herramientas-header">
        <span className="herramientas-pill">HERRAMIENTAS</span>
        <h2 className="herramientas-title">Herramientas y Tecnologías</h2>
        <p className="herramientas-subtitle">
          Mi caja de herramientas de ingeniería de software para afrontar los retos más
          complejos de la web moderna.
        </p>
      </div>

      <div className="herramientas-container">
        {skillsData.map((group, index) => (
          <div className="herramientas-group" key={index}>
            <h3 className="herramientas-category-title">{group.category}</h3>
            <div className="herramientas-tags">
              {group.tools.map((tool, i) => (
                <div key={i} className="herramientas-tag">
                  <span className="tool-icon">{tool.icon}</span>
                  <span className="tool-name">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HerramientaComponent;