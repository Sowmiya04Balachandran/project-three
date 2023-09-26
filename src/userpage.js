// import React, { useContext } from 'react';
// import  CartContext  from '../CartContext';
// import './UserPage.css'; // Import CSS

// const UserPage = () => {
//   const { medicines, addToCart } = useContext(CartContext);

//   const handleAddToCart = (medicine) => {
//     addToCart(medicine);
//   };

//   return (
//     <div className="user-page">
//       <h2>Medicine Store</h2>
//       <div className="medicine-list">
//         {medicines.map((medicine) => (
//           <div key={medicine.id} className="medicine-card">
//             <h3>{medicine.name}</h3>
//             <p>{medicine.description}</p>
//             <p>Price: ${medicine.price}</p>
//             <p>Quantity: {medicine.quantity}</p>
//             {medicine.quantity > 0 ? (
//               <button onClick={() => handleAddToCart(medicine)}>Add to Cart</button>
//             ) : (
//               <p className="out-of-stock">Out of Stock</p>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default UserPage;
// UserPage.js
// UserPage.js
import React, { useState } from 'react';
import CartButton from './CartButton'; // Update the import path
import { useCartContext } from './store/CartContext';

function UserPage() {
  const { state, dispatch } = useCartContext();
  const { adminMedicines } = state;

  // Maintain quantity state for each medicine
  const [medicineQuantities, setMedicineQuantities] = useState(
    adminMedicines.reduce((quantities, medicine) => {
      quantities[medicine.name] = medicine.quantity;
      return quantities;
    }, {})
  );

  const handleAddToCart = (medicine) => {
    if (medicineQuantities[medicine.name] > 0) {
      // Dispatch an action to add medicine to the shared state (cart)
      dispatch({ type: 'ADD_TO_CART', payload: medicine });

      // Decrement the quantity for the selected medicine
      setMedicineQuantities((prevQuantities) => ({
        ...prevQuantities,
        [medicine.name]: prevQuantities[medicine.name] - 1,
      }));
    }
  };

  return (
    <div>
      <h2>User Page</h2>
      <CartButton /> {/* Display the cart button */}
      <div>
        <h3>Admin-Submitted Medicines</h3>
        <ul>
          {adminMedicines.map((medicine, index) => (
            <li key={index}>
              {/* Display medicine details */}
              <p>Name: {medicine.name}</p>
              <p>Description: {medicine.description}</p>
              <p>Price: {medicine.price}</p>
              <p>Quantity: {medicineQuantities[medicine.name]}</p>
              {/* Add to Cart button */}
              <button
                onClick={() => handleAddToCart(medicine)}
                disabled={medicineQuantities[medicine.name] === 0}
              >
                Add to Cart
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default UserPage;
