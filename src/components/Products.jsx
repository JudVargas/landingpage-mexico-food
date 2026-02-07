import './Products.css'
import productsData from '../data/products.json'

function Products({ onAddToCart }) {
  const products = productsData

  return (
    <section id="productos" className="products-section">
      <h2>Nuestros Chiles Premium</h2>
      <p className="section-subtitle">
        Chiles secos mexicanos de la más alta calidad, importados directamente para usted
      </p>
      <div className="products-grid">
        {products.map(product => (
          <div key={product.id} className={`product-card ${product.featured ? 'featured' : ''}`}>
            {product.featured && <span className="badge">Más Popular</span>}
            <div className="product-image">
              <img src={product.image} alt={product.name} loading="lazy" />
            </div>
            <h3>{product.name}</h3>
            <p className="product-description">{product.description}</p>
            <div className="product-details">
              <div className="detail">
                <span className="detail-label">Presentación:</span>
                <span className="detail-value">{product.weight}</span>
              </div>
              <div className="detail">
                <span className="detail-label">Picor:</span>
                <span className="detail-value">{product.scoville}</span>
              </div>
            </div>
            <div className="product-footer">
              <div className="product-price">
                <span>{product.price}</span>
              </div>
              <button 
                className="add-to-cart-btn"
                onClick={() => {
                  console.log('Producto agregado:', product)
                  onAddToCart(product)
                }}
                title="Agregar al carrito"
              >
                🛒 Agregar
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Products
