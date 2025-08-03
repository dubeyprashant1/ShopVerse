import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import productData from './productData';

const Home = () => {
  const [quantities, setQuantities] = useState({});

  const handleIncrement = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  const handleDecrement = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max((prev[id] || 0) - 1, 0),
    }));
  };

  return (
    <div className="home-page">
      <h1 className="page-title">Featured Products</h1>
      <div className="product-grid">
        {productData.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>₹{product.price}</p>
            <div className="quantity-controls">
              <button onClick={() => handleDecrement(product.id)}>-</button>
              <span>{quantities[product.id] || 0}</span>
              <button onClick={() => handleIncrement(product.id)}>+</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;