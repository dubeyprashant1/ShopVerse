import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [placingOrder, setPlacingOrder] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const items = localStorage.getItem('cart');
    if (items) setCartItems(JSON.parse(items));
  }, []);

  const removeItem = (id) => {
    const newItems = cartItems.filter(item => item.itemId !== id);
    setCartItems(newItems);
    localStorage.setItem('cart', JSON.stringify(newItems));
  };

  const placeOrder = () => {
    setPlacingOrder(true);
    setTimeout(() => {
      alert('Order placed successfully!');
      setCartItems([]);
      localStorage.removeItem('cart');
      setPlacingOrder(false);
      navigate('/home');
    }, 3000);
  };

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? <p>Cart is empty</p> : (
        <ul>
          {cartItems.map(item => (
            <li key={item.itemId}>
              {item.name} - ₹{item.price}
              <button onClick={() => removeItem(item.itemId)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      {cartItems.length > 0 && (
        <button onClick={placeOrder} disabled={placingOrder}>
          {placingOrder ? 'Placing Order...' : 'Place Order'}
        </button>
      )}
    </div>
  );
}