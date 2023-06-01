import React, { useContext, useState } from 'react';
import styles from './Customer.module.css';
import { NotesContext } from 'context/notesContext';

const Customer = ({ handleChange }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  // const [address, setAddress] = useState('');
  const { address, setAddress } = useContext(NotesContext);

  return (
    <div className={styles['customer-container']}>
      <h3>Customer Details</h3>
      <div className={styles['customer-input']}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={event => handleChange(event, setName)}
        />
      </div>
      <div className={styles['customer-input']}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={event => handleChange(event, setEmail)}
        />
      </div>
      <div className={styles['customer-input']}>
        <label htmlFor="phone">Phone:</label>
        <input
          type="text"
          id="phone"
          value={phone}
          onChange={event => handleChange(event, setPhone)}
        />
      </div>
      <div className={styles['customer-input']}>
        <label htmlFor="address">Address:</label>
        <input
          type="text"
          id="address"
          value={address}
          onChange={event => handleChange(event, setAddress)}
        />
      </div>
    </div>
  );
};

export default Customer;

