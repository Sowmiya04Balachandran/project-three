// CartModal.js
import React from 'react';
import CartItem from './CartItem';

const CartModal = ({ cartItems, onClose, onAdd, onRemove }) => {
  return (
    <div className="cart-modal">
      <div className="cart-modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>Cart Items</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cartItems.map((item, index) => (
            <CartItem key={index} item={item} onAdd={onAdd} onRemove={onRemove} />
          ))
        )}
        <h3>Total Price: ${calculateTotalPrice(cartItems)}</h3>
      </div>
    </div>
  );
};

function calculateTotalPrice(cartItems) {
  return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
}

export default CartModal;
