import React, { useState } from 'react';
import styles from './ShopCard.module.css';

export const ShopCard = ({ food, onClick }) => {
  const { _id, name, description, price, imageUrl, cart } = food;
  const [isCart, setIsCart] = useState(cart);

  const handleCartClick = () => {
    setIsCart(prevstate=> !prevstate);
    onClick(_id);
    // addToCart(food)
    // console.log(object);
  };

  return (
    <div className={styles.card}>
      <img className={styles.image} src={imageUrl} alt={name} />
      <div className={styles.details}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.description}>{description}</p>
        <p className={styles.price}>Price: {price}</p>
      </div>
      <button className={styles.button} onClick={handleCartClick}>
        {isCart ? "Delete to Cart" : "Add to Cart"}
      </button>
    </div>
  );
};


