
import React, { createContext, useEffect, useState } from 'react';

import fetchShopsListFromAPI from '../Axios/AxiosGetCategories'



// Створюємо контекст для передачі даних між компонентами
export const NotesContext = createContext();

// Створюємо провайдер для забезпечення доступу до даних в контексті
export const NotesProvider = ({ children }) => {
  // Створюємо стейти для зберігання нотаток, поточної нотатки, рядка пошуку, фільтрованого масиву нотаток
  // const [notes, setNotes] = useState([]);

  const [shops, setShops] = useState([]);


  // Виконуємо запит до бази даних для отримання всіх shops при монтуванні компонента
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchShopsListFromAPI();
        console.log(data);
        setShops(data);
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchData();
  }, []);
  

  // Оновлюємо фільтрований масив нотаток при зміні рядка пошуку або нотаток
  // useEffect(() => {}, [searchFilter, notes]);

  // Оновлюємо фільтрований масив нотаток при зміні рядка пошуку або нотаток
  // const filteredNotesMemo = useMemo(() => {
  //   return notes.filter(
  //     note =>
  //       note.title.toLowerCase().includes(searchFilter.toLowerCase()) ||
  //       note.body.toLowerCase().includes(searchFilter.toLowerCase())
  //   );
  // }, [searchFilter, notes]);

  return (
    <NotesContext.Provider
      value={{
        shops,
       
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};
