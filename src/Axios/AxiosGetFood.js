import axios from 'axios';

const fetchFoodsListFromAPI = async (shop) => {
  try {
    const response = await axios.get(`http://nalivpv.keenetic.pro:4000/api/foods/shop/${shop}`);
    return response.data;
  } catch (error) {
    console.log(error.message);
    return error.response.data;
  }
};

export default fetchFoodsListFromAPI;
