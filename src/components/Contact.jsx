import './Contact.css'

function Contact() {
  return (
    <section id="contacto" className="contact-section">
      <h2>Contacto</h2>
      <p className="section-subtitle">
        ¿Tiene preguntas? Estamos aquí para ayudarle
      </p>
      <div className="contact-content">
        <div className="contact-info">
          <div className="info-item">
            <span className="info-icon">📍</span>
            <div>
              <h3>Dirección</h3>
              <p>Calle 85 # 15-28, Oficina 304</p>
              <p>Bogotá, Colombia</p>
            </div>
          </div>
          <div className="info-item">
            <span className="info-icon">📞</span>
            <div>
              <h3>Teléfono</h3>
              <p>+57 601 234 5678</p>
              <p>+57 310 456 7890</p>
            </div>
          </div>
          <div className="info-item">
            <span className="info-icon">📧</span>
            <div>
              <h3>Email</h3>
              <p>info@chilemexico.co</p>
              <p>ventas@chilemexico.co</p>
            </div>
          </div>
          <div className="info-item">
            <span className="info-icon">⏰</span>
            <div>
              <h3>Horario de Atención</h3>
              <p>Lunes a Viernes: 8:00 AM - 6:00 PM</p>
              <p>Sábados: 9:00 AM - 2:00 PM</p>
            </div>
          </div>
        </div>
        <div className="contact-form-container">
          <h3>Solicite una Cotización</h3>
          <p className="form-description">Complete el formulario y nos pondremos en contacto</p>
          <form className="contact-form">
            <input type="text" placeholder="Nombre Completo *" required />
            <input type="email" placeholder="Email Corporativo *" required />
            <input type="tel" placeholder="Teléfono *" required />
            <input type="text" placeholder="Empresa / Restaurante" />
            <textarea placeholder="¿Qué productos le interesan? *" rows="4" required></textarea>
            <button type="submit">
              <span>Enviar Solicitud</span>
              <span className="button-icon">→</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
