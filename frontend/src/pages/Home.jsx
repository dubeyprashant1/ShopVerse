import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function Home() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/api/items') // replace with actual backend route
      .then(res => res.json())
      .then(data => setItems(data));
  }, []);

  const addToCart = (item) => {
    if (cartItems.find(i => i.itemId === item.itemId)) {
      alert('Item already added to cart');
    } else {
      setCartItems([...cartItems, item]);
    }
  };

  const goToCart = () => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
    navigate('/cart');
  };

  return (
    <div className="home-page">
      <div className="nav-bar">
        <button onClick={goToCart}>Cart</button>
        <button>Profile</button>
      </div>
      <h2>Available Items</h2>
      <div className="items-container">
        {items.map(item => (
          <div className="item-card" key={item.itemId}>
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}
