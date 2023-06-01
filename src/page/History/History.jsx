import React, { useContext, useState, useEffect } from 'react';
import { HistoryOrders } from '../../components/HistoryOrders/HistoryOrders';
import styles from './History.module.css';
import { NotesContext } from 'context/notesContext';

export const History = () => {
  const { historyData } = useContext(NotesContext);
  const [emailFilter, setEmailFilter] = useState('');
  const [phoneFilter, setPhoneFilter] = useState('');
  const [filteredHistory, setFilteredHistory] = useState([]);

  useEffect(() => {
    const filteredData = historyData.filter((item) =>
      item.email.includes(emailFilter)
    );
    setFilteredHistory(filteredData);
  }, [historyData, emailFilter, phoneFilter]);

  useEffect(() => {
    const filteredData = historyData.filter((item) =>
      item.phone.includes(phoneFilter)
    );
    setFilteredHistory((prevFilteredHistory) => {
      const filteredIds = filteredData.map((item) => item._id);
      return prevFilteredHistory.filter((item) =>
        filteredIds.includes(item._id)
      );
    });
  }, [historyData, phoneFilter, emailFilter]);

  return (
    <div className={styles.history_container}>
      <h1>Order History</h1>
      <div className={styles.filter_container}>
        <div className={styles.input_container}>
          <input
            type="mail"
            placeholder="Filter by Email"
            value={emailFilter}
            onChange={(e) => setEmailFilter(e.target.value)}
          />
        </div>
        <div className={styles.input_container}>
          <input
            type="phone"
            placeholder="Filter by Phone"
            value={phoneFilter}
            onChange={(e) => setPhoneFilter(e.target.value)}
          />
        </div>
      </div>
      {filteredHistory.length > 0 ? (
        <ul className={styles.history_list}>
          {filteredHistory.map((item) => (
            <li key={item._id}>
              <HistoryOrders item={item} />
            </li>
          ))}
        </ul>
      ) : (
        <p className={styles.no_history}>No order history available</p>
      )}
    </div>
  );
};







