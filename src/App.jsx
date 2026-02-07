import './App.css'
import Header from './components/Header'
import Products from './components/Products'
import About from './components/About'
import Contact from './components/Contact'
import Map from './components/Map'
import WhatsAppButton from './components/WhatsAppButton'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Products />
        <About />
        <Contact />
        <Map />
      </main>
      <WhatsAppButton />
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>🌶️ Chile México Premium</h3>
            <p>Importadores directos de chiles mexicanos de calidad premium a Colombia</p>
          </div>
          <div className="footer-section">
            <h4>Contacto</h4>
            <p>Email: info@chilemexico.co</p>
            <p>Tel: +57 310 456 7890</p>
          </div>
          <div className="footer-section">
            <h4>Ubicación</h4>
            <p>Bogotá, Colombia</p>
            <p>Calle 85 # 15-28, Oficina 304</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Chile México Premium. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
