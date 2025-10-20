import React from 'react';
import './App.css';

function App() {
  const products = [
    { id: 1, name: 'Premium Product', price: '$99', image: '🎁' },
    { id: 2, name: 'Exclusive Item', price: '$149', image: '💎' },
    { id: 3, name: 'Limited Edition', price: '$199', image: '⭐' }
  ];

  return (
    <div className="App">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Empire Store 🚀</h1>
          <p className="hero-subtitle">
            Welcome to our business storefront. Discover premium products that transform your experience.
          </p>
          <button className="cta-button">Shop Now</button>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="products">
        <h2>Featured Products</h2>
        <div className="product-grid">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-icon">{product.image}</div>
              <h3>{product.name}</h3>
              <p className="product-price">{product.price}</p>
              <button className="product-button">View Details</button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 Empire Store. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
