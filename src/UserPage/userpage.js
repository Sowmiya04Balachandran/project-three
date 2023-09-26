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
import React from 'react';
import { useCartContext } from '../CartContext';
import CartButton from '../CartButton'; // Import the CartButton component

function UserPage() {
  const { cartState } = useCartContext();
  const medicines = cartState.cart;

  return (
    <div>
      <h2>User Page</h2>
      {/* CartButton in the top right corner */}
      <div className="cart-button-container">
        <CartButton />
      </div>
      <div className="medicine-list">
        {/* Map and display medicines */}
        {medicines.map((medicine, index) => (
          <div key={index} className="medicine-card">
            <h3>{medicine.name}</h3>
            <p>{medicine.description}</p>
            <p>Price: ${medicine.price}</p>
            <p>Quantity: {medicine.quantity}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserPage;
