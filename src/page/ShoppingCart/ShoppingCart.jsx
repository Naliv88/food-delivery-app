import React, { useCallback, useEffect, useState } from 'react';
import CartCard from '../../components/CartCard/CartCard';
import {
  fetchdeleteFromCart,
} from '../../Axios/AxiosCart';
import Customer from 'components/Customer/Customer';
import { postHistoryData } from '../../Axios/AxiosHistory';

import styles from './ShoppingCart.module.css';
import MapContainer from 'components/MapContainer/MapContainer';
import { CartListFromLocalStorage, removeAllFromCart, removeFromCart } from 'localStorag/storage';
// import { NotesContext } from 'context/notesContext';

export const ShoppingCart = () => {
  
  // const { handleSomeEvent } = useContext(NotesContext);
  const [cartItems, setCartItems] = useState([]);
  const [order, setOrder] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  const fetchData = useCallback(async () => {
    try {
      const data = await CartListFromLocalStorage();
      console.log(data);
      return data;
    } catch (error) {
      console.error(error);
    }
  }, []);

  const fetchDataAndSetCartItems = useCallback(async () => {
    const cartOrder = await fetchData();
    const cartsOrderQ = cartOrder.map(
      ({ shop, _id, price, imageUrl, name }) => ({
        name,
        imageUrl,
        shop,
        idFood: _id,
        quantity: 1,
        price: price,
      })
    );
    setCartItems(cartsOrderQ);
  }, [fetchData]);

  useEffect(() => {
    fetchDataAndSetCartItems();
  }, [fetchDataAndSetCartItems]);

  const handleChange = (event, setValue) => {
    setValue(event.target.value);
  };

  const handleRemoveFromCart = async itemId => {
    try {
      removeFromCart(itemId);
      await fetchdeleteFromCart(itemId);
      setCartItems(prevItems =>
        prevItems.filter(item => item.idFood !== itemId)
      );
    } catch (error) {
      console.error(error);
    }
  };

  const calculateTotalPrice = () => {
    const totalPrice = cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    return totalPrice.toFixed(2);
  };

  const handleUpdateQuantity = (itemId, newQuantity) => {
    setCartItems(prevItems =>
      prevItems.map(item => {
        if (item.idFood === itemId) {
          return { ...item, quantity: newQuantity };
        }
        return item;
      })
    );
  };

  const handleOrder = event => {
    event.preventDefault();

    const { name, email, phone, address } = event.target;

    const newOrder = {
      name: name.value,
      email: email.value,
      phone: phone.value,
      address: address.value,
      orders: [...cartItems],
    };

    setOrder(newOrder);
    postHistoryData(newOrder);

    setCartItems([]);
    removeAllFromCart();
    // handleSomeEvent()
  };

  useEffect(() => {
    console.log('Order placed:', order);

    setCartItems([]);
  }, [order]);

  return (
    <div>
      <form onSubmit={handleOrder} className={styles.shoppingCart_form}>
        <div>
          <div className={styles.map}>
            <MapContainer />
          </div>

          <Customer handleChange={handleChange} order={order} />
        </div>
        <div className={styles.shoppingCart_cart_list}>
          <h3>Cart Items</h3>
          {cartItems.length > 0 ? (
            <div className={styles.shoppingCart_cart_item}>
              {cartItems.map(item => (
                <CartCard
                  key={item.idFood}
                  item={item}
                  onRemove={handleRemoveFromCart}
                  onUpdateQuantity={handleUpdateQuantity}
                />
              ))}
            </div>
          ) : (
            <p>No items in the cart</p>
          )}
          <div className={styles.shoppingCart_total_price}>
            <h3>Total Price: ${calculateTotalPrice()}</h3>
            <button
              type="submit"
              className={styles.shoppingCart_place_order_button}
            >
              Place Order
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
