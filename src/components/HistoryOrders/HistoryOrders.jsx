import React from 'react';
import styles from './HistoryOrders.module.css';
import HistoryItem from 'components/HistoryItem/HistoryItem';

export const HistoryOrders = ({ item }) => {

  const totalPrice = item.items.reduce((acc, currentItem) => {
    return acc + currentItem.price * currentItem.quantity;
  }, 0);

  return (
    <>
      {item.items.length > 0 ? (
        <div className={styles.history_orders_list}>
          <ul className={styles.history_food_list}>
            {item.items.map((item) => (
              <li key={item._id}>
                <HistoryItem item={item} />
              </li>
            ))}
          </ul>
          <p>Total price: ${totalPrice.toFixed(2)}</p>
        </div>
      ) : (
        <p>No order history available</p>
      )}
    </>
  );
};

