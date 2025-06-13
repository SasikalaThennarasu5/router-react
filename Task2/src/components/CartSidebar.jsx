import React from 'react';
import { useCart } from '../contexts/CartContext';
import PortalWrapper from '../portals/PortalWrapper';
import './CartSidebar.css';

const CartSidebar = ({ visible, onClose }) => {
  const { cartItems, removeFromCart } = useCart();

  if (!visible) return null;

  return (
    <PortalWrapper elementId="cart-root">
      <div className="cart-overlay" onClick={onClose}>
        <div className="cart-sidebar" onClick={(e) => e.stopPropagation()}>
          <h3>Your Cart</h3>
          <button className="close-btn" onClick={onClose}>×</button>
          <ul>
            {cartItems.length === 0 ? (
              <p>No items in cart</p>
            ) : (
              cartItems.map((item) => (
                <li key={item.id}>
                  {item.title} - ₹{item.price}
                  <button onClick={() => removeFromCart(item.id)}>Remove</button>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </PortalWrapper>
  );
};

export default CartSidebar;
