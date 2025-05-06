import React from "react";
import styles from "./Banner.module.css";
import BannerBg from "../../assets/Banner.png";
import Button from "../Button/Button";
import GetstartedImage from "../../assets/get_started.png";

function Banner() {
  return (
    <div
      className={styles.mainContainer}
      style={{ backgroundImage: `url(${BannerBg})` }}
    >
      <div className={styles.bannerText}>
        <p className={styles.mainText}>Let’s work with Us</p>
        <p className={styles.subText}>
          Join us to turn your ideas into reality with seamless collaboration
          and expert <br /> support every step of the way. Let's create
          something great together!
        </p>
      </div>
      <Button className={styles.heroButtonOverride}>
        <p>Connect Now</p>
        <img src={GetstartedImage} alt="connect now" />
      </Button>
    </div>
  );
}

export default Banner;
