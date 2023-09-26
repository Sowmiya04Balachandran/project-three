import React, { useRef } from 'react';
import { useCartContext } from './store/CartContext';
import styles from './AdminPage.module.css'

function AdminPage() {
  const { dispatch } = useCartContext();
  const medicineNameRef = useRef();
  const descriptionRef = useRef();
  const priceRef = useRef();
  const quantityRef = useRef();

  const handleAddMedicine = () => {
    const newMedicine = {
      name: medicineNameRef.current.value,
      description: descriptionRef.current.value,
      price: parseFloat(priceRef.current.value),
      quantity: parseInt(quantityRef.current.value),
    };

    // Dispatch an action to add medicine to the adminMedicines state
    dispatch({ type: 'ADD_ADMIN_MEDICINE', payload: newMedicine });

    // Clear input fields
    medicineNameRef.current.value = '';
    descriptionRef.current.value = '';
    priceRef.current.value = '';
    quantityRef.current.value = '';
  };

  return (
    <div className={styles['admin-page']}> {/* Apply the CSS class */}
    <h2>Admin Page</h2>
    <div className={styles['medicine-form']}> {/* Apply the CSS class */}
        {/* Input fields for adding medicines */}
        <label htmlFor="medicine">Medicine Name</label>
        <input type="text" id="medicine" ref={medicineNameRef} required />
        <label htmlFor="description">Description</label>
        <input type="text" id="description" ref={descriptionRef} required />
        <label htmlFor="price">Price</label>
        <input type="number" id="price" ref={priceRef} required />
        <label htmlFor="quantity">Quantity</label>
        <input type="number" id="quantity" ref={quantityRef} required />
        <button onClick={handleAddMedicine}>Add Medicine</button>
      </div>
    </div>
  );
}

export default AdminPage;
