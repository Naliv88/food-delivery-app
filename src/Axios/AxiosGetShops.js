import axios from 'axios';

const fetchShopsListFromAPI = async () => {
  try {
    const response = await axios.get('https://nalivpv.keenetic.pro:4000/api/foods/shop');
    return response.data;
  } catch (error) {
    console.log(error.message);
    return error.response.data;
  }
};

export default fetchShopsListFromAPI;
