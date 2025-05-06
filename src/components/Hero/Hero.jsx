import React from "react";
import styles from "./Hero.module.css";
import HeroBg from "../../assets/Hero_section.png";
import Navbar from "../Navbar/Navbar";
import whatsapp from "../../assets/whatsapp_logo.png";
import twitter from "../../assets/twiter.png";
import instagram from "../../assets/instagram.png";
import linkedin from "../../assets/linkedin.png";
import Button from "../Button/Button";
import GetstartedImage from "..//../assets/get_started.png";
import HeadingLogo from "../../assets/heading_logo.png";

function Hero() {
  return (
    <div className={styles.hero} style={{ backgroundImage: `url(${HeroBg})` }}>
      <Navbar />
      <div className={styles.heroItems}>
        <div className={styles.socialIcons}>
          <img src={instagram} alt="instagram" />
          <img src={twitter} alt="twitter" />
          <img src={whatsapp} alt="whatsapp" />
          <img src={linkedin} alt="linkedin" />
        </div>
        <div className={styles.headingContainer}>
          <p className={styles.headingText}>Amazing Digital creations</p>
          <p className={styles.headingText}>With Brandworx agency</p>
          <p className={styles.subheadingText}>
            Help you to build digital solutions that is modern, user friendly,
            good CEO, and Clean design
          </p>
          <Button className={styles.heroButtonOverride}>
            <p>Get Started</p>
            <img src={GetstartedImage} alt="get started" />
          </Button>
        </div>
        <div className={styles.headingLogo}>
          <img src={HeadingLogo} alt="Logo" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
