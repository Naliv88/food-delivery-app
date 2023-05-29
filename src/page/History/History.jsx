import React from 'react';
import HistoryItem from '../../components/HistoryItem/HistoryItem';
// import fetchHistoryData from '../../Axios/AxiosGetHistory';
import styles from './History.module.css';

export const History = () => {
const historyData=[];

  // const [historyData, setHistoryData] = useState([]);

  // useEffect(() => {
  //   const fetchHistory = async () => {
  //     try {
  //       const data = await fetchHistoryData();
  //       setHistoryData(data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchHistory();
  // }, []);

  return (
    <div className={styles.history_container}>
      <h1>Order History</h1>
      {historyData.length > 0 ? (
        <ul className={styles.history_list}>
          {historyData.map((item) => (
            <HistoryItem key={item.id} item={item} />
          ))}
        </ul>
      ) : (
        <p>No order history available</p>
      )}
    </div>
  );
};

