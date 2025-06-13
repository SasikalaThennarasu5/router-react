import React from 'react';
import { useCart } from '../contexts/CartContext';

const Checkout = () => {
  const { cartItems, clearCart } = useCart();

  return (
    <div className="page">
      <h2>Checkout</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>{item.title} - ₹ {item.price}</li>
            ))}
          </ul>
          <button onClick={clearCart}>Confirm Purchase</button>
        </>
      )}
    </div>
  );
};

export default Checkout;
