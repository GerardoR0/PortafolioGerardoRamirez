import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import "./ContactoComponent.css";

const ContactoComponent = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const SERVICE_ID = "service_nfqdj8r";
    const TEMPLATE_ID = "template_dyfb16m";
    const PUBLIC_KEY = "WoR18DtI5NqbV_rHv"; 

    const templateParams = {
      nombre: formData.nombre,
      email: formData.email,
      mensaje: formData.mensaje,
    };

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then(
        (response) => {
          setLoading(false);
          setFormData({ nombre: "", email: "", mensaje: "" });

          // Modal con SweetAlert2 
          Swal.fire({
            title: "¡Mensaje Enviado!",
            text: "Gracias por ponerte en contacto. Te contactaré lo antes posible.",
            icon: "success",
            confirmButtonText: "Aceptar",
            background: "#161b22",
            color: "#fff",
            confirmButtonColor: "#06b6d4",
            customClass: {
              popup: "custom-swal-popup",
              confirmButton: "custom-swal-btn",
            },
          });
        },
        (error) => {
          console.error("FAILED...", error);
          setLoading(false);
          
          Swal.fire({
            title: "Error",
            text: "Hubo un error al enviar el mensaje, por favor intenta de nuevo.",
            icon: "error",
            confirmButtonText: "Entendido",
            background: "#161b22",
            color: "#fff",
            confirmButtonColor: "#ef4444",
          });
        }
      );
  };

  return (
    <section className="contacto-section" id="contacto">
      <div className="contacto-header">
        <span className="contacto-pill">CONTACTO</span>
        <h2 className="contacto-title">¿Tienes un proyecto en mente?</h2>
        <p className="contacto-subtitle">
          Hablemos de cómo puedo ayudarte a construir una experiencia web excepcional.
        </p>
      </div>

      <div className="contacto-container">
        {/* Columna Izquierda: Información de contacto y redes */}
        <div className="contacto-info">
          <h3>Trabajemos juntos</h3>
          <p className="contacto-info-desc">
            Completa el formulario o ponte en contacto directamente a través de cualquiera de mis
            canales oficiales de comunicación.
          </p>

          <div className="contacto-details">
            <div className="contacto-item">
              <div className="contacto-icon-box">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </div>
              <div>
                <span className="contacto-label">Correo Electrónico</span>
                <span className="contacto-value">gerard.ro2110@gmail.com</span>
              </div>
            </div>

            <div className="contacto-item">
              <div className="contacto-icon-box">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </div>
              <div>
                <span className="contacto-label">Teléfono</span>
                <span className="contacto-value">+52 37239546</span>
              </div>
            </div>

            <div className="contacto-item">
              <div className="contacto-icon-box">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              </div>
              <div>
                <span className="contacto-label">Ubicación</span>
                <span className="contacto-value">Ixtapaluca, Edo. México</span>
              </div>
            </div>
          </div>

          <div className="contacto-socials">
            <a href="https://github.com/GerardoR0" target="_blank" rel="noopener noreferrer" className="social-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            </a>
            <a href="https://www.linkedin.com/in/gerardo-ramírez-b39687234/" target="_blank" rel="noopener noreferrer" className="social-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
          </div>
        </div>

        {/* Columna Derecha: Formulario */}
        <div className="contacto-form-wrapper">
          <form className="contacto-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="nombre">Nombre</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                placeholder="Tu nombre completo"
                value={formData.nombre}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="correo@ejemplo.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="mensaje">Mensaje</label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows="4"
                placeholder="Cuéntame sobre tu proyecto..."
                value={formData.mensaje}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? "Enviando..." : "Enviar Mensaje"}
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactoComponent;