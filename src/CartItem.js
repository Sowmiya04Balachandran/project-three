// CartItem.js
import React from 'react';

const CartItem = ({ item, onAdd, onRemove }) => {
  return (
    <div className="cart-item">
      <div className="cart-item-info">
        <p>{item.name}</p>
        <p>Price: ${item.price}</p>
        <p>Quantity: {item.quantity}</p>
      </div>
      <div className="cart-item-actions">
        <button onClick={() => onRemove(item)}>Remove</button>
        <button onClick={() => onAdd(item)}>Add</button>
      </div>
    </div>
  );
};

export default CartItem;
