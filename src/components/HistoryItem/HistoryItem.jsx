import React from 'react';
import styles from './HistoryItem.module.css';

const HistoryItem = ({ item }) => {
  const { imageUrl, name, price, date, quantity, shop  } = item;
  // console.log(item);

  const dateTime = new Date(date);
const dateString = dateTime.toLocaleDateString();

  return (
    <div className={styles.history_item}>
      <img className={styles.item_image} src={imageUrl} alt={name} />
      <div className={styles.item_details}>
        <h3 className={styles.item_title}>{name}</h3>
        <p className={styles.item_description}>{shop}</p>
        <p className={styles.item_price}>Price: ${price}</p>
        <p className={styles.item_price}>Quantity: {quantity}</p>
        <p className={styles.item_date}>Date: {dateString}</p>
      </div>
    </div>
  );
};


export default HistoryItem;


