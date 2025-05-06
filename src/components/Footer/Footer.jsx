import React from "react";
import FooterBg from "../../assets/Footer.png";
import styles from "./Footer.module.css";
import FooterLogo from "../../assets/footer_logo.png";
import ArrowBg from "../../assets/arrow_up.png";

function Footer() {
  return (
    <div
      className={styles.mainContainer}
      style={{ backgroundImage: `url(${FooterBg})` }}
    >
      <div className={styles.contentWrapper}>
        <div className={styles.logoSection}>
          <img src={FooterLogo} alt="footerlogo" />
        </div>

        <div className={styles.firstContainer}>
          <p className={styles.mainText}>
            2nd Floor, Shree Complex, <br /> Plot No. 42, Sector 18, <br />
            Koramangala, Bengaluru - <br /> 560095, Karnataka, India
          </p>
          <p className={styles.subText}>+91-9876543210</p>
          <p className={styles.subText}>contact@brandworx.agency</p>
        </div>

        <div className={styles.secondContainer}>
          <p className={styles.subText}>About</p>
          <p className={styles.subText}>Services</p>
          <p className={styles.subText}>Portfolio</p>
          <p className={styles.subText}>Contact Us</p>
          <p className={styles.bottomText}>
            © 2024 Brandworx. All rights reserved.
          </p>
        </div>

        <div className={styles.secondContainer}>
          <p className={styles.subText}>Facebook</p>
          <p className={styles.subText}>Twitter</p>
          <p className={styles.subText}>Instagram</p>
          <p className={styles.subText}>Linkedin</p>
        </div>
      </div>

      <div
        className={styles.whiteCircle}
        style={{ backgroundImage: `url(${ArrowBg})` }}
      ></div>
    </div>
  );
}

export default Footer;
