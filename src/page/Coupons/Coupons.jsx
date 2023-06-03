import React, { useState } from 'react';
import styles from './Coupons.module.css';
import  CouponItem  from '../../components/CouponItem/CouponItem';

const Coupons = () => {
  const coupons = [
    {
      id: 1,
      store: 'Store 1',
      code: 'CODE_1_!jjjdD',
      image: 'https://images.examples.com/wp-content/uploads/2017/11/resto-gift-1024x681.jpg?width=600',
    },
    {
      id: 2,
      store: 'Store 2',
      code: 'CODE_2_kKuUfF',
      image: 'https://images.examples.com/wp-content/uploads/2017/11/thai.jpg?width=600',
    },
    {
      id: 3,
      store: 'Store 3',
      code: 'CODE_3_jjJ33ll',
      image: 'https://images.examples.com/wp-content/uploads/2017/11/Fast-Food-Restaurant-Coupon.jpg?width=600',
    },
  ];

  const [copiedCoupon, setCopiedCoupon] = useState('');

  const copyCouponCode = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCoupon(code);
  };

  return (
    <div className={styles.couponsContainer}>
      <h1>Coupons PAGE</h1>
      <ul>
      {coupons.map((coupon) => (
        <li key={coupon.id} className={styles.couponItem}>
<CouponItem coupon={coupon} copyCouponCode={copyCouponCode} copiedCoupon={copiedCoupon}/>

        </li>
      ))}</ul>
    </div>
  );
};

export default Coupons;
