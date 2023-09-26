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

import React, { createContext, useContext, useEffect, useReducer } from 'react';

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      // Handle adding an item to the cart
      const updatedCartAdd = [...state.cart, action.payload];
      return { ...state, cart: updatedCartAdd };

    case 'REMOVE_FROM_CART':
      // Handle removing an item from the cart
      const updatedCartRemove = state.cart.filter(
        (item) => item.id !== action.payload
      );
      return { ...state, cart: updatedCartRemove };

    case 'UPDATE_CART':
      // Handle updating the cart
      const updatedCart = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, quantity: action.payload.quantity };
        }
        return item;
      });
      return { ...state, cart: updatedCart };

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const initialState = {
    cart: [],
    total: 0,
  };

  const [cartState, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    // You can handle fetching cart data from the API here if needed
  }, []);

  return (
    <CartContext.Provider value={{ cartState, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

