// AIzaSyAn6yCYR7-TXsSvS2UfJISAaKdoTzMrIIg
import axios from 'axios';

export const getAddressFromCoordinates = async (latitude, longitude) => {
  try {
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyAn6yCYR7-TXsSvS2UfJISAaKdoTzMrIIg`
    );

    const data = response.data;
    const results = data.results;
    if (results && results.length > 0) {
      const address = results[0].formatted_address;
      return address;
    }

    return '';
  } catch (error) {
    console.error('Error fetching address from coordinates:', error);
    return '';
  }
};

