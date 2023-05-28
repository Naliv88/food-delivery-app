import { LeftSideShop } from 'components/LeftSideShop/LeftSideShop';
import { RightSideShop } from 'components/RightSideShop/RightSideShop';
import React from 'react';
import styles from './Shop.module.css'

export const Shop = () => {
  return (
   <div className={styles.work}>
    <LeftSideShop/>
    <RightSideShop/>
   </div>
  );
};