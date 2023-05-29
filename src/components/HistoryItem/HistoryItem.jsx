import React from 'react';
import styles from './HistoryItem.module.css';

const HistoryItem = ({ item }) => {
  const { image, title, description, price, date } = item;

  return (
    <div className={styles.history_item}>
      <img className={styles.item_image} src={image} alt={title} />
      <div className={styles.item_details}>
        <h3 className={styles.item_title}>{title}</h3>
        <p className={styles.item_description}>{description}</p>
        <p className={styles.item_price}>Price: ${price.toFixed(2)}</p>
        <p className={styles.item_date}>Date: {date}</p>
      </div>
    </div>
  );
};


export default HistoryItem;


