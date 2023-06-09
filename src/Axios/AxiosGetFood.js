import axios from 'axios';

const fetchFoodsListFromAPI = async (shop) => {
  try {
    const response = await axios.get(`https://nalivpv.keenetic.pro:5000/api/foods/shop/${shop}`);
    return response.data;
  } catch (error) {
    console.log(error.message);
    return error.response.data;
  }
};

export default fetchFoodsListFromAPI;
