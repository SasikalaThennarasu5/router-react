// Mini Project 1: Shopping Cart
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Project1 = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const addItem = () => {
    dispatch({ type: 'ADD_ITEM', payload: { id: 1, name: 'Item A', quantity: 1 } });
  };

  const removeItem = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  const updateQuantity = (id, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };

  return (
    <div>
      <h2>Mini Project 1: Shopping Cart</h2>
      <button onClick={addItem}>Add Item</button>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            {item.name} - Qty: {item.quantity}
            <button onClick={() => removeItem(item.id)}>Remove</button>
            <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Project1;
