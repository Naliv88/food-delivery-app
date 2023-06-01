const CartListFromLocalStorage = () => {
    try {
      const cartList = localStorage.getItem('cartList');
      return cartList ? JSON.parse(cartList) : [];
    } catch (error) {
      console.log(error.message);
      return [];
    }
  };
  
  const addToCart = foodItem => {
    try {
      const cartList = CartListFromLocalStorage();
      const existingItemIndex = cartList.findIndex(item => item._id === foodItem._id);
      if (existingItemIndex !== -1) {
        cartList.splice(existingItemIndex, 1);
      }
      if (existingItemIndex === -1) {
        cartList.push(foodItem);
      }
      
      localStorage.setItem('cartList', JSON.stringify(cartList));
      return cartList;
    } catch (error) {
      console.log(error.message);
      return [];
    }
  };
  
  
  
  const removeFromCart = foodID => {
    try {
      const cartList = CartListFromLocalStorage();
      const updatedCartList = cartList.filter(item => item.idFood !== foodID);
      localStorage.setItem('cartList', JSON.stringify(updatedCartList));
      return updatedCartList;
    } catch (error) {
      console.log(error.message);
      return [];
    }
  };

  const removeAllFromCart = foodID => {
    try {
      const updatedCartList = [];
      localStorage.setItem('cartList', JSON.stringify(updatedCartList));
      return updatedCartList;
    } catch (error) {
      console.log(error.message);
      return [];
    }
  };
  
  export { CartListFromLocalStorage, addToCart, removeFromCart, removeAllFromCart };
  
  
