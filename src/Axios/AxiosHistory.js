import axios from 'axios';

const fetchHistoryData = async () => {
  try {
    const response = await axios.get('http://nalivpv.keenetic.pro:4000/api/foods/history');
  
    return response.data;
  } catch (error) {
    console.log(error.message);
    return error.response.data;
  }
};

const postHistoryData = async orders => {
  try {
    const response = await axios.post(
      'http://nalivpv.keenetic.pro:4000/api/foods/history',
      orders
    );
    return response.data;
  } catch (error) {
    console.log(error.message);
    return error.response.data;
  }
};

export { fetchHistoryData, postHistoryData };
