import React from 'react';
import styles from './CartCard.module.css';

const CartCard = ({ item, onRemove, onUpdateQuantity }) => {
  const handleQuantityChange = event => {
    const newQuantity = parseInt(event.target.value);
    onUpdateQuantity(item.idFood, +newQuantity);
  };

  return (
    <div className={styles['cart-card']}>
      <img
        src={item.imageUrl}
        alt={item.name}
        className={styles['cart-card-image']}
      />
      <div className={styles['cart-card_disc']}>
        <h4 className={styles['cart-card-name']}>{item.name}</h4>
        <p className={styles['cart-card-price']}>Price: ${item.price}</p>

        <label htmlFor={`${item.idFood}`} className={styles['cart-card-label']}>
          Quantity:
        </label>
        <input
          type="number"
          id={`${item.idFood}`}
          value={item.quantity}
          min="1"
          onChange={handleQuantityChange}
          className={styles['cart-card-quantity']}
        />

        <button
          onClick={() => onRemove(item.idFood)}
          className={styles['cart-card-button']}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartCard;
