// import React, { useContext } from 'react';
// import  CartContext  from './CartContext';
// import './CartButton.css'; // Import CSS

// const CartButton = () => {
//   const { cart, openCart } = useContext(CartContext);

//   return (
//     <button onClick={openCart} className="cart-button">
//       Cart ({cart.length})
//     </button>
//   );
// };

// export default CartButton;

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from './CartContext';

function CartButton() {
  const { cartState } = useCartContext();

  return (
    <div>
      <Link to="/cart">Cart ({cartState.cart.length})</Link>
    </div>
  );
}

export default CartButton;
