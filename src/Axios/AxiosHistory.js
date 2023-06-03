import axios from 'axios';

const fetchHistoryData = async () => {
  try {
    const response = await axios.get('https://nalivpv.keenetic.pro:5000/api/foods/history');
  
    return response.data;
  } catch (error) {
    console.log(error.message);
    return error.response.data;
  }
};

const postHistoryData = async orders => {
  try {
    const response = await axios.post(
      'https://nalivpv.keenetic.pro:5000/api/foods/history',
      orders
    );
    return response.data;
  } catch (error) {
    console.log(error.message);
    return error.response.data;
  }
};

export { fetchHistoryData, postHistoryData };
