import React, { useContext } from 'react';

// import styles from './LeftSideShop.module.css';
import { NotesContext } from 'context/notesContext';

export const LeftSideShop = () => {


    const { shops } = useContext(NotesContext);


  return (
    <>
    <ul>
        {shops.map((shop) => ( <li key={shop}><button>{shop}</button></li>))}
    </ul>
      
    </>
  );
};
