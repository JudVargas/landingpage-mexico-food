import './Products.css'

function Products() {
  const products = [
    {
      id: 1,
      name: 'Chile Ancho',
      description: 'Chile poblano seco, dulce y aromático. Ideal para moles y adobos.',
      weight: '100g - 500g',
      scoville: '1,000 - 2,000 SHU',
      emoji: '🌶️',
      featured: true
    },
    {
      id: 2,
      name: 'Chile Guajillo',
      description: 'Sabor dulce y ligeramente picante. Perfecto para salsas y caldos.',
      weight: '100g - 500g',
      scoville: '2,500 - 5,000 SHU',
      emoji: '🌶️',
      featured: true
    },
    {
      id: 3,
      name: 'Chile Chipotle Meco',
      description: 'Jalapeño ahumado con sabor intenso. Esencial para marinados.',
      weight: '100g - 500g',
      scoville: '5,000 - 10,000 SHU',
      emoji: '🌶️',
      featured: false
    },
    {
      id: 4,
      name: 'Chile de Árbol',
      description: 'Picante intenso y brillante. Para salsas picantes y aceites.',
      weight: '100g - 500g',
      scoville: '15,000 - 30,000 SHU',
      emoji: '🌶️',
      featured: false
    },
    {
      id: 5,
      name: 'Chile Pasilla',
      description: 'Chilaca seco con notas de chocolate. Ideal para moles oscuros.',
      weight: '100g - 500g',
      scoville: '1,000 - 2,500 SHU',
      emoji: '🌶️',
      featured: false
    },
    {
      id: 6,
      name: 'Chile Cascabel',
      description: 'Sabor a nuez con picor moderado. Versátil para múltiples platillos.',
      weight: '100g - 500g',
      scoville: '1,500 - 2,500 SHU',
      emoji: '🌶️',
      featured: false
    }
  ]

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
            <div className="product-emoji">{product.emoji}</div>
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
          </div>
        ))}
      </div>
    </section>
  )
}

export default Products
