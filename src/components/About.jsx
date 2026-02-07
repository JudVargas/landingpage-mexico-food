import './About.css'

function About() {
  return (
    <section id="nosotros" className="about-section">
      <h2>Sobre Nosotros</h2>
      <p className="section-subtitle">
        Conectando la tradición mexicana con la cocina colombiana
      </p>
      <div className="about-content">
        <div className="about-text">
          <h3>🌶️ Nuestra Historia</h3>
          <p>
            <strong>Chile México Premium</strong> nace de la pasión por la gastronomía mexicana 
            y el deseo de traer sus increíbles sabores a Colombia. Desde 2018, somos importadores 
            directos de chiles secos mexicanos de la más alta calidad.
          </p>
          <p>
            Trabajamos directamente con productores en México, asegurando que cada chile mantenga 
            su autenticidad, aroma y sabor característico. Nuestros productos son seleccionados 
            cuidadosamente y llegan a Colombia en perfectas condiciones.
          </p>
          <h3>🎯 Nuestra Misión</h3>
          <p>
            Ser el puente entre la tradición culinaria mexicana y los chefs, restaurantes y 
            amantes de la cocina en Colombia. Ofrecemos chiles auténticos que elevan cualquier 
            plato con sabores únicos e inigualables.
          </p>
        </div>
        <div className="about-values">
          <div className="value-card">
            <span className="value-icon">🇲🇽</span>
            <h4>100% Mexicanos</h4>
            <p>Importación directa desde las mejores regiones productoras de México</p>
          </div>
          <div className="value-card">
            <span className="value-icon">⭐</span>
            <h4>Calidad Premium</h4>
            <p>Selección rigurosa de cada lote para garantizar máxima calidad</p>
          </div>
          <div className="value-card">
            <span className="value-icon">👨‍🍳</span>
            <h4>Para Profesionales</h4>
            <p>Suministramos a restaurantes, chefs y distribuidores en toda Colombia</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
