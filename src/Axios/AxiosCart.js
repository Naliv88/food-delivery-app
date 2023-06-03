import axios from 'axios';

const fetchCartListFromAPI = async () => {
  try {
    const response = await axios.get('https://nalivpv.keenetic.pro:5000/api/foods/cart');
    return response.data;
  } catch (error) {
    console.log(error.message);
    return error.response.data;
  }
};

const fetchCartWithIDFromAPI = async (foodID) => {
  try {
    const response = await axios.patch(`https://nalivpv.keenetic.pro:5000/api/foods/cart/${foodID}`);
    return response.data;
  } catch (error) {
    console.log(error.message);
    return error.response.data;
  }
};

const fetchdeleteFromCart = async (foodID) => {
  try {
    const response = await axios.put(`https://nalivpv.keenetic.pro:5000/api/foods/cart/${foodID}`);
    return response.data;
  } catch (error) {
    console.log(error.message);
    return error.response.data;
  }
};

export  {fetchCartListFromAPI, fetchCartWithIDFromAPI, fetchdeleteFromCart};
