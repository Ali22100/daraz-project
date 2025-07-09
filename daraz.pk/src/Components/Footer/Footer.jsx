import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
  <>
<div className={styles.footerdivide}>
    <footer className={styles.footer}>
      <div className={styles.topSection}>
        <div className={styles.linksSection}>
          <div>
            <h5>Customer Care</h5>
            <ul>
              <li>Help Center</li>
              <li>How to Buy</li>
              <li>Corporate & Bulk Purchasing</li>
              <li>Returns & Refunds</li>
              <li>Daraz Shop</li>
              <li>Contact Us</li>
              <li>Purchase Protection</li>
              <li>Daraz Pick up Points</li>
            </ul>
          </div>
          <div>
            <h5>Daraz</h5>
            <ul>
              <li>About Us</li>
              <li>Digital Payments</li>
              <li>Daraz Donates</li>
              <li>Daraz Blog</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>NTN Number: 4012118-6</li>
              <li>STRN Number: 1700401211818</li>
              <li>Online Shopping App</li>
              <li>Online Grocery Shopping</li>
              <li>Daraz Exclusive</li>
              <li>Daraz University</li>
              <li>Sell on Daraz</li>
              <li>Join Daraz Affiliate Program</li>
            </ul>
          </div>
        </div>

        <div className={styles.appSection}>
          <p><strong>Happy Shopping</strong><br />Download App</p>
          <div className={styles.appImages}>
            <img src="https://img.lazcdn.com/us/domino/2db6633b-c83c-48b7-9f7d-1262ee87cc80_PK-126-42.png" alt="App Store" />
            <img src="https://img.lazcdn.com/us/domino/4812f06f-072d-45be-a930-640edf4caeee_PK-126-42.png" alt="Google Play" />
            <img src="https://img.lazcdn.com/us/domino/7d216fe8-1bac-4ac9-81d3-072a9fbf32fc_PK-126-42.png" alt="App Gallery" />
          </div>
        </div>
      </div>

      {/* <div className={styles.bottomSection}>
        <div className={styles.paymentMethods}>
          <h5>Payment Methods</h5>
          <img className={styles.paymentImg} width={30} src="https://img.lazcdn.com/us/domino/ee9913f8-8258-4382-b97e-e2047ce93012_PK-139-84.png" alt="Payment Methods" />
           <img className={styles.paymentImg} width={30} src="https://img.lazcdn.com/us/domino/78355368-8518-4b88-9f8e-e5751ee0863a_PK-140-84.png" alt="Payment Methods" />
            <img className={styles.paymentImg} width={30} src="https://img.lazcdn.com/us/domino/5ba8a652-1445-45cb-a2a5-ed6043004243_PK-63-48.png" alt="Payment Methods" />
             <img className={styles.paymentImg} width={30} src="https://img.lazcdn.com/us/domino/dd8e0447-8052-44f3-8ab2-b24c56a2491f_PK-139-84.png" alt="Payment Methods" />
              <img className={styles.paymentImg} width={30} src="https://img.lazcdn.com/us/domino/e5c3cd93-b796-410f-9bfd-fbfdaa055149_PK-144-84.png" alt="Payment Methods" />
               <img className={styles.paymentImg} width={30} src="https://img.lazcdn.com/us/domino/56915ba8-b2c0-4caf-b3a1-7e0f3d2d45cf_PK-139-84.png" alt="Payment Methods" />
              <br />
               <img className={styles.paymentImg} width={30} src="https://img.lazcdn.com/us/domino/75489476-3c86-44ed-bf81-8b0579d56e1c_PK-139-84.png" alt="Payment Methods" />
                <img className={styles.paymentImg} width={30} src="https://img.lazcdn.com/us/domino/6668ff96-bf9a-40bd-8ce4-f7f7c0bee385_PK-144-84.png" alt="Payment Methods" />
                 <img className={styles.paymentImg} width={30} src="https://img.lazcdn.com/us/domino/7237a412-04cc-4571-a200-44f6f847a9da_PK-144-84.png" alt="Payment Methods" />
        </div>
        <div className={styles.verified}>
          <h5>Verified by</h5>
          <img src="https://img.drz.lazcdn.com/g/tps/imgextra/i4/O1CN01ZaMORP1I3qlBom0V2_!!6000000000838-2-tps-73-41.png" alt="Verified" />
        </div>
      </div> */}
    </footer>

    <div className={styles.bottomSection}>
        <div className={styles.paymentMethods}>
          <h5>Payment Methods</h5>
          <img className={styles.paymentImg} width={30} src="https://img.lazcdn.com/us/domino/ee9913f8-8258-4382-b97e-e2047ce93012_PK-139-84.png" alt="Payment Methods" />
           <img className={styles.paymentImg} width={30} src="https://img.lazcdn.com/us/domino/78355368-8518-4b88-9f8e-e5751ee0863a_PK-140-84.png" alt="Payment Methods" />
            <img className={styles.paymentImg} width={30} src="https://img.lazcdn.com/us/domino/5ba8a652-1445-45cb-a2a5-ed6043004243_PK-63-48.png" alt="Payment Methods" />
             <img className={styles.paymentImg} width={30} src="https://img.lazcdn.com/us/domino/dd8e0447-8052-44f3-8ab2-b24c56a2491f_PK-139-84.png" alt="Payment Methods" />
              <img className={styles.paymentImg} width={30} src="https://img.lazcdn.com/us/domino/e5c3cd93-b796-410f-9bfd-fbfdaa055149_PK-144-84.png" alt="Payment Methods" />
               <img className={styles.paymentImg} width={30} src="https://img.lazcdn.com/us/domino/56915ba8-b2c0-4caf-b3a1-7e0f3d2d45cf_PK-139-84.png" alt="Payment Methods" />
              <br />
               <img className={styles.paymentImg} width={30} src="https://img.lazcdn.com/us/domino/75489476-3c86-44ed-bf81-8b0579d56e1c_PK-139-84.png" alt="Payment Methods" />
                <img className={styles.paymentImg} width={30} src="https://img.lazcdn.com/us/domino/6668ff96-bf9a-40bd-8ce4-f7f7c0bee385_PK-144-84.png" alt="Payment Methods" />
                 <img className={styles.paymentImg} width={30} src="https://img.lazcdn.com/us/domino/7237a412-04cc-4571-a200-44f6f847a9da_PK-144-84.png" alt="Payment Methods" />
        </div>
        <div className={styles.verified}>
          <h5>Verified by</h5>
          <img src="https://img.drz.lazcdn.com/g/tps/imgextra/i4/O1CN01ZaMORP1I3qlBom0V2_!!6000000000838-2-tps-73-41.png" alt="Verified" />
        </div>
      </div>
    </div>
  </>
  );
};

export default Footer;
