// import React, { createContext, useContext, useState, useEffect } from 'react';

// const CartContext = createContext();

// export const useCartContext = () => useContext(CartContext);

// export const CartProvider = ({ children }) => {
//   const [medicines, setMedicines] = useState([]);
//   const [cart, setCart] = useState([]);
//   const [isCartOpen, setIsCartOpen] = useState(false);

//   const openCart = () => {
//     setIsCartOpen(true);
//   };

//   const closeCart = () => {
//     setIsCartOpen(false);
//   };

//   const addMedicine = (medicine) => {
//     // Implement logic to add medicine to medicines state
//     setMedicines([...medicines, medicine]);

//     // Make a POST request to add the item to the backend
//     fetch('https://crudcrud.com/api/5bf095911a2c4a7a876ee8d702582ce4/medicines', {
//       method: 'POST',
//       body: JSON.stringify(medicine),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     })
//       .then((res) => {
//         if (res.ok) {
//           // Handle success
//         } else {
//           // Handle error
//         }
//       })
//       .catch((error) => {
//         // Handle error
//       });
//   };

//   const addToCart = (medicine) => {
//     // Implement logic to add medicine to cart state
//     setCart([...cart, medicine]);

//     // Make a POST request to add the item to the backend
//     fetch('https://crudcrud.com/api/5bf095911a2c4a7a876ee8d702582ce4/cart', {
//       method: 'POST',
//       body: JSON.stringify(medicine),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     })
//       .then((res) => {
//         if (res.ok) {
//           // Handle success
//         } else {
//           // Handle error
//         }
//       })
//       .catch((error) => {
//         // Handle error
//       });
//   };

//   const removeFromCart = (itemId) => {
//     // Implement logic to remove an item from the cart
//     const updatedCart = cart.filter((item) => item.id !== itemId);
//     setCart(updatedCart);

//     // Make a DELETE request to remove the item from the backend
//     fetch(`https://crudcrud.com/api/5bf095911a2c4a7a876ee8d702582ce4/cart/${itemId}`, {
//       method: 'DELETE',
//     })
//       .then((res) => {
//         if (res.ok) {
//           // Handle success
//         } else {
//           // Handle error
//         }
//       })
//       .catch((error) => {
//         // Handle error
//       });
//   };

//   const updateCartItemQuantity = (itemId, newQuantity) => {
//     // Implement logic to update item quantity in the cart
//     const updatedCart = cart.map((item) =>
//       item.id === itemId ? { ...item, quantity: newQuantity } : item
//     );
//     setCart(updatedCart);

//     // Make a PUT request to update the item quantity in the backend
//     fetch(`https://crudcrud.com/api/5bf095911a2c4a7a876ee8d702582ce4/cart/${itemId}`, {
//       method: 'PUT',
//       body: JSON.stringify({ quantity: newQuantity }),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     })
//       .then((res) => {
//         if (res.ok) {
//           // Handle success
//         } else {
//           // Handle error
//         }
//       })
//       .catch((error) => {
//         // Handle error
//       });
//   };

//   useEffect(() => {
//     // Retrieve cart data on page refresh
//     fetch('https://crudcrud.com/api/5bf095911a2c4a7a876ee8d702582ce4/cart')
//       .then((res) => res.json())
//       .then((data) => {
//         setCart(data);
//       })
//       .catch((error) => {
//         // Handle error
//       });
//   }, []);

//   return (
//     <CartContext.Provider
//       value={{
//         medicines,
//         cart,
//         isCartOpen,
//         openCart,
//         closeCart,
//         addMedicine,
//         addToCart,
//         removeFromCart,
//         updateCartItemQuantity,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// export default CartContext;

// CartContext.js

import React, { createContext, useContext, useReducer } from 'react';

const initialState = {
  cart: [],
  adminMedicines: [],
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return { ...state, cart: [...state.cart, action.payload] };
    case 'ADD_ADMIN_MEDICINE':
      return { ...state, adminMedicines: [...state.adminMedicines, action.payload] };
    default:
      return state;
  }
};

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to access the context values
export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCartContext must be used within a CartProvider');
  }
  return context;
};
