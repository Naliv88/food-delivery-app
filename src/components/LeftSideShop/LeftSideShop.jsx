
import React, { useContext } from 'react';
import styles from './LeftSideShop.module.css';
import { NotesContext } from 'context/notesContext';

export const LeftSideShop = () => {
  const { shops, setCurrentShop } = useContext(NotesContext);

  function handleShop(shop) {
    console.log(`Clicked shop: ${shop}`);
    setCurrentShop(shop)
  }

  return (
    <div className={styles.leftSideShop}>
      <p className={styles.heading}>Shops:</p>
      <ul className={styles.list}>
        {shops.map(shop => (
          <li key={shop}>
            <button className={styles.button} onClick={() => handleShop(shop)}>
              {shop}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

