
import React, { useContext } from 'react';
import styles from './RightSideShop.module.css';
import { NotesContext } from 'context/notesContext';
import { ShopCard } from 'components/ShopCard/ShopCard';
import fetchCartListFromAPI from '../../Axios/AxiosPatchCart';

export const RightSideShop = () => {
  const { foods } = useContext(NotesContext);

  function handleCart(id) {
    console.log(`Clicked Add to Cart. Food ID: ${id}`);
    fetchCartListFromAPI(id)
  }

  return (
    <div className={styles.rightSideShop}>
      <ul className={styles.list}>
        {foods.map(food => (
          <li key={food.id}>
            <ShopCard food={food} onClick={handleCart} />
          </li>
        ))}
      </ul>
    </div>
  );
};

