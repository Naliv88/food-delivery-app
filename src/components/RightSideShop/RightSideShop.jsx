import React, { useContext } from 'react';
import styles from './RightSideShop.module.css';
import { NotesContext } from 'context/notesContext';
import { ShopCard } from 'components/ShopCard/ShopCard';
import { fetchCartWithIDFromAPI } from '../../Axios/AxiosCart';
import { addToCart } from 'localStorag/storage';

export const RightSideShop = () => {
  const { foods } = useContext(NotesContext);

  async function handleCart(id) {
    try {
      const foodItem = foods.find(food => food._id === id);
      addToCart(foodItem);
      await fetchCartWithIDFromAPI(id);
      console.log(`Clicked Add to Cart. Food ID: ${id}`);
    } catch (error) {
      console.error('Error adding item to cart:', error);
    }
  }

  return (
    <div className={styles.rightSideShop}>
      <ul className={styles.list}>
        {foods.map((food, index) => (
          <li key={index}>
            <ShopCard food={food} onClick={() => handleCart(food._id)} />
          </li>
        ))}
      </ul>
    </div>
  );
};


