import React, { useState } from 'react';
import styles from "./CartCard.module.css"

const CartCard = ({ item, onRemove, onUpdateQuantity }) => {
  const { id, imageUrl, name, price, quantity } = item;
  const [updatedQuantity, setUpdatedQuantity] = useState(quantity);

  const handleRemove = () => {
    onRemove(id);
  };

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value);
    setUpdatedQuantity(newQuantity);
    onUpdateQuantity(id, newQuantity);
  };

  return (
    <div className={styles.cartCard_container}>
      <img src={imageUrl} alt={name} width="200px" />
      <div>
        <h3>{name}</h3>
        <p>Price: ${price}</p>
        <label htmlFor="quantity">Quantity:</label>
          <input
            type="number"
            id="quantity"
            value={updatedQuantity}
            onChange={handleQuantityChange}
            min="1"
          />
        
        <button onClick={handleRemove}>Remove</button>
      </div>
    </div>
  );
};

export default CartCard;


