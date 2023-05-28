import axios from 'axios';

const fetchCartListFromAPI = async () => {
  try {
    const response = await axios.get('http://localhost:4000/api/foods/cart');
    return response.data;
  } catch (error) {
    console.log(error.message);
    return error.response.data;
  }
};

export default fetchCartListFromAPI;
