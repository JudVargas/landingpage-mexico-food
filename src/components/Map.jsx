import './Map.css'

function Map() {
  // Coordenadas de Bogotá, Colombia (Zona Norte)
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.2626217982956!2d-74.05373842507!3d4.710988795307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9b5e5b5e5b5b%3A0x5b5e5b5e5b5e5b5e!2sBogot%C3%A1%2C%20Colombia!5e0!3m2!1ses!2sco!4v1707000000000!5m2!1ses!2sco"

  return (
    <section id="ubicacion" className="map-section">
      <h2>Nuestra Ubicación</h2>
      <p className="section-subtitle">
        Visítenos en Bogotá o contacte para entregas en toda Colombia
      </p>
      <div className="map-container">
        <iframe
          src={mapUrl}
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ubicación de Chile México Premium en Bogotá"
        ></iframe>
      </div>
      <div className="directions">
        <div className="directions-content">
          <div className="directions-info">
            <p>
              📍 <strong>Calle 85 # 15-28, Oficina 304, Bogotá, Colombia</strong>
            </p>
            <p className="delivery-info">
              🚚 Realizamos entregas a toda Colombia - Consulte por pedidos mayoristas
            </p>
          </div>
          <a 
            href="https://www.google.com/maps/dir//4.710988795307,-74.05373842507"
            target="_blank"
            rel="noopener noreferrer"
            className="directions-button"
          >
            <span>Cómo Llegar</span>
            <span className="button-arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Map
