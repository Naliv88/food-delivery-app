import axios from 'axios';

const fetchdeleteFromCart = async (foodID) => {
  try {
    const response = await axios.put(`http://localhost:4000/api/foods/cart/${foodID}`);
    return response.data;
  } catch (error) {
    console.log(error.message);
    return error.response.data;
  }
};

export default fetchdeleteFromCart;
