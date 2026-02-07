import './Header.css'

function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">
          <img src="/img/logo.png" alt="Chile México Premium Logo" className="logo-img" />
          <h1>Chile México Premium</h1>
        </div>
        <ul className="nav-links">
          <li><a href="#productos">Productos</a></li>
          <li><a href="#nosotros">Nosotros</a></li>
          <li><a href="#contacto">Contacto</a></li>
          <li><a href="#ubicacion">Ubicación</a></li>
        </ul>
      </nav>
      <div className="hero">
        <span className="hero-badge">Importadores Directos</span>
        <h2>Chiles Mexicanos Premium</h2>
        <p>Importamos los mejores chiles secos de México directamente a Colombia</p>
        <div className="hero-features">
          <div className="feature">
            <span className="feature-icon">✅</span>
            <span>100% Auténticos</span>
          </div>
          <div className="feature">
            <span className="feature-icon">🚚</span>
            <span>Importación Directa</span>
          </div>
          <div className="feature">
            <span className="feature-icon">🌶️</span>
            <span>Máxima Calidad</span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
