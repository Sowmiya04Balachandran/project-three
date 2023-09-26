import React, { useContext } from 'react';
import { useCartContext } from './CartContext';

function CartModal() {
  const { cartState, dispatch } = useCartContext();

  const handleRemove = (itemId) => {
    // Remove item from cart and make DELETE request
    const updatedCart = cartState.cart.filter((item) => item.id !== itemId);

    // Dispatch an action to update the cart
    dispatch({ type: 'UPDATE_CART', payload: updatedCart });

    // Make a DELETE request to remove the item from the backend
    fetch(`https://crudcrud.com/api/5bf095911a2c4a7a876ee8d702582ce4/medicinecart/${itemId}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          console.log(`Item with ID ${itemId} deleted from the backend.`);
        } else {
          console.error(`Failed to delete item with ID ${itemId} from the backend.`);
        }
      })
      .catch((error) => {
        console.error(`Error deleting item with ID ${itemId}:`, error);
      });
  };

  const handleAdd = (itemId) => {
    // Add item to cart and make POST request
    const itemToAdd = cartState.cart.find((item) => item.id === itemId);

    if (itemToAdd) {
      // Increase the quantity of the item to be added
      itemToAdd.quantity++;

      // Dispatch an action to update the cart
      dispatch({ type: 'UPDATE_CART', payload: cartState.cart });

      // Make a POST request to update the item's quantity in the backend
      fetch(`https://crudcrud.com/api/5bf095911a2c4a7a876ee8d702582ce4/medicinecart/${itemId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...itemToAdd }),
      })
        .then((response) => {
          if (response.ok) {
            console.log(`Item with ID ${itemId} quantity updated in the backend.`);
          } else {
            console.error(`Failed to update item with ID ${itemId} quantity in the backend.`);
          }
        })
        .catch((error) => {
          console.error(`Error updating item with ID ${itemId} quantity:`, error);
        });
    }
  };

  return (
    <div>
      <h2>Your Cart</h2>
      <ul>
        {cartState.cart.map((item) => (
          <li key={item.id}>
            <div>
              <h3>{item.name}</h3>
              <p>Price: ${item.price}</p>
              <p>Quantity: {item.quantity}</p>
            </div>
            <div>
              <button onClick={() => handleRemove(item.id)}>Remove</button>
              <button onClick={() => handleAdd(item.id)}>Add</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CartModal;
