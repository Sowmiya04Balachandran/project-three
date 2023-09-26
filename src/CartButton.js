import React, { useState, useEffect } from 'react';
import { useCartContext } from './store/CartContext';
import classes from './CartButton.module.css';
import CartModal from './CartModal';

const CartButton = (props) => {
  const { state, dispatch } = useCartContext();
  const { cart } = state;
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    setCartCount(cart.length);
  }, [cart]);

  const handleAddToCart = (item) => {
    dispatch({ type: 'ADD_TO_CART', payload: item });
  };

  const handleRemoveFromCart = (item) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: item });
  };

  return (  
    <div className={classes['cart-button-container']}>
      <button onClick={toggleModal} className={classes['cart-button']}>
        Cart <sup>{cartCount}</sup>
      </button>
      {modalOpen && (
        <CartModal
          cartItems={cart}
          onClose={toggleModal}
          onAdd={handleAddToCart}
          onRemove={handleRemoveFromCart}
        />
      )}
    </div>
  );
};

export default CartButton;

