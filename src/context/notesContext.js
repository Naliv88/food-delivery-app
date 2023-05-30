
import React, { createContext, useEffect, useState } from 'react';

import fetchShopsListFromAPI from '../Axios/AxiosGetShops'
import fetchFoodsListFromAPI from '../Axios/AxiosGetFood'
import {fetchHistoryData} from '../Axios/AxiosHistory'


// Створюємо контекст для передачі даних між компонентами
export const NotesContext = createContext();

// Створюємо провайдер для забезпечення доступу до даних в контексті
export const NotesProvider = ({ children }) => {
  // Створюємо стейти для зберігання

  const [shops, setShops] = useState([]);
  const [currentShop, setCurrentShop] = useState('');
  const [foods, setfoods] = useState([]);

    const [historyData, setHistoryData] = useState([]);
  console.log(currentShop);


  // Виконуємо запит до бази даних для отримання всіх shops при монтуванні компонента
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchShopsListFromAPI();
        setShops(data);
        setCurrentShop(data[0])

      } catch (error) {
        console.error(error);
      }
    };
    
    const fetchHistory = async () => {
      try {
        const history = await fetchHistoryData()
        setHistoryData(history)
        
      } catch (error) {
        console.error(error);
      }
    };
    
    fetchData();
    fetchHistory();
  }, []);
  

  // Оновлюємо 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchFoodsListFromAPI(currentShop);
        setfoods(data)
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchData();
  }, [currentShop]);


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
        setCurrentShop,
        currentShop,
        foods,
        historyData,

      }} displayName="Context"
    >
      {children}
    </NotesContext.Provider>
  );
};
