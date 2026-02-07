import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Products from './components/Products'
import About from './components/About'
import Contact from './components/Contact'
import Map from './components/Map'
import WhatsAppButton from './components/WhatsAppButton'
import Cart from './components/Cart'

function App() {
  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem('cart')
    return saved ? JSON.parse(saved) : []
  })
  const [isCartOpen, setIsCartOpen] = useState(false)

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems))
  }, [cartItems])

  const handleAddToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id)
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      } else {
        return [...prevItems, { ...product, quantity: 1 }]
      }
    })
  }

  const handleRemoveFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId))
  }

  const handleUpdateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      )
    )
  }

  return (
    <div className="App">
      <Header />
      <main>
        <Products onAddToCart={handleAddToCart} />
        <About />
        <Contact />
        <Map />
      </main>
      <WhatsAppButton isCartOpen={isCartOpen} />
      <Cart 
        items={cartItems} 
        onRemove={handleRemoveFromCart}
        onUpdateQuantity={handleUpdateQuantity}
        isOpen={isCartOpen}
        onToggle={setIsCartOpen}
      />
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
