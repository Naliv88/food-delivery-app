import React from 'react';

import styles from './CouponItem.module.css';

 const CouponItem = ({coupon, copyCouponCode, copiedCoupon}) => {
  return (
    <>
      <img src={coupon.image} alt="Coupon" className={styles.couponImage} />
          <h2 className={styles.storeName}>{coupon.store}</h2>
          <p className={styles.couponCode}>Code: {coupon.code}</p>
          <button
            onClick={() => copyCouponCode(coupon.code)}
            className={styles.copyButton}
          >
            {copiedCoupon === coupon.code ? 'Copied!' : 'Copy'}
          </button>
    </>
  );
};

export default  CouponItem;