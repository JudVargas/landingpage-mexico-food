import './Cart.css'

function Cart({ items, onRemove, onUpdateQuantity, isOpen, onToggle }) {
  // Usar el estado pasado como prop en lugar del estado local

  // Calcular total eliminando el símbolo $ y convertir a número
  const calculateTotal = () => {
    return items.reduce((total, item) => {
      const price = parseInt(item.price.replace(/[^0-9]/g, ''))
      return total + (price * item.quantity)
    }, 0)
  }

  const total = calculateTotal()
  const formattedTotal = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
  }).format(total)

  const handleWhatsAppQuote = () => {
    if (items.length === 0) {
      alert('Por favor agrega productos al carrito')
      return
    }

    const quote = items
      .map(item => `${item.name} - Cantidad: ${item.quantity}`)
      .join('\n')

    const message = `Hola, me gustaría cotizar los siguientes productos:\n\n${quote}\n\nTotal estimado: ${formattedTotal}`
    const encodedMessage = encodeURIComponent(message)
    const whatsappLink = `https://wa.me/573104567890?text=${encodedMessage}`
    window.open(whatsappLink, '_blank')
  }

  return (
    <>
      {/* Botón flotante del carrito - Solo visible si hay productos */}
      {items.length > 0 && (
        <button 
          className="cart-button"
          onClick={() => onToggle(!isOpen)}
          title="Abrir carrito de compras"
        >
          🛒
          <span className="cart-badge">{items.length}</span>
        </button>
      )}

      {/* Panel del carrito */}
      <div className={`cart-panel ${isOpen ? 'open' : ''}`}>
        <div className="cart-header">
          <h3>Carrito de Compras</h3>
          <button 
            className="close-button"
            onClick={() => onToggle(false)}
            aria-label="Cerrar carrito"
          >
            ✕
          </button>
        </div>

        <div className="cart-content">
          {items.length === 0 ? (
            <p className="empty-cart">No hay productos en el carrito</p>
          ) : (
            <div className="cart-items">
              {items.map(item => (
                <div key={item.id} className="cart-item">
                  <div className="item-info">
                    <h4>{item.name}</h4>
                    <p className="item-price">{item.price}</p>
                  </div>
                  <div className="item-controls">
                    <button 
                      className="qty-button"
                      onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                    >
                      −
                    </button>
                    <span className="qty-display">{item.quantity}</span>
                    <button 
                      className="qty-button"
                      onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                  <button 
                    className="remove-button"
                    onClick={() => onRemove(item.id)}
                    title="Eliminar del carrito"
                  >
                    🗑️
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total">
              <span>Total:</span>
              <span className="total-amount">{formattedTotal}</span>
            </div>
            <button 
              className="quote-button"
              onClick={handleWhatsAppQuote}
            >
              📱 Cotizar por WhatsApp
            </button>
            <p className="cart-note">
              Completa tu cotización directamente por WhatsApp
            </p>
          </div>
        )}
      </div>

      {isOpen && (
        <div 
          className="cart-overlay"
          onClick={() => onToggle(false)}
        ></div>
      )}
    </>
  )
}

export default Cart
