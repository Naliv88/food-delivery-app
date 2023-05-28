import React, { useEffect, useState } from 'react';
import CartCard from '../../components/CartCard/CartCard';
import fetchCartListFromAPI from '../../Axios/AxiosGetCart';

export const ShoppingCart = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [cartItems, setCartItems] = useState([]);

  const fetchData = async () => {
    try {
      const data = await fetchCartListFromAPI();
      console.log(data);
      setCartItems(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (event, setValue) => {
    setValue(event.target.value);
  };

  const handleOrder = event => {
    event.preventDefault();

    // Perform order processing logic here
    console.log('Order placed:', {
      name,
      email,
      phone,
      address,
      cartItems,
    });

    // Clear the form and cart items
    setName('');
    setEmail('');
    setPhone('');
    setAddress('');
    setCartItems([]);
  };

  const handleRemoveFromCart = itemId => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  // Обработчик обновления количества элемента в корзине
  const handleUpdateQuantity = (itemId, newQuantity) => {
    setCartItems(prevItems =>
      prevItems.map(item => {
        if (item.id === itemId) {
          return { ...item, quantity: newQuantity };
        }
        return item;
      })
    );
  };

  return (
    <div>
      <form onSubmit={handleOrder}>
        <div>
          <h2>Customer Details</h2>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(event) => handleChange(event, setName)}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(event) => handleChange(event, setEmail)}
            />
          </div>
          <div>
            <label htmlFor="phone">Phone:</label>
            <input
              type="text"
              id="phone"
              value={phone}
              onChange={(event) => handleChange(event, setPhone)}
            />
          </div>
          <div>
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              id="address"
              value={address}
              onChange={(event) => handleChange(event, setAddress)}
            />
          </div>
        </div>
        <div>
          <h2>Cart Items</h2>
          {cartItems.length > 0 ? (
            <div>
              {cartItems.map(item => (
                <CartCard
                  key={item.id}
                  item={item}
                  onRemove={handleRemoveFromCart}
                  onUpdateQuantity={handleUpdateQuantity}
                />
              ))}
            </div>
          ) : (
            <p>No items in the cart</p>
          )}
          <div>
            <h3>Total Price: ${calculateTotalPrice()}</h3>
            <button type="submit">Place Order</button>
          </div>
        </div>
      </form>
    </div>
  );
};
