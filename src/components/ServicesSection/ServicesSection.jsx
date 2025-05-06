import React from "react";
import styles from "./ServicesSection.module.css";
import HeroBg from "../../assets/Services_Section.png";
import ball from "../../assets/Rings-side.png";
import FirstImage from "../../assets/first_image.png";
import SecondImage from "../../assets/second_image.png";
import ThirdImage from "../../assets/third_image.png";
import Button from "../Button/Button";
import GetstartedImage from "../../assets/get_started.png";

function ServicesSection() {
  return (
    <div className={styles.mainContainer}>
      <div
        className={styles.servicesSection}
        style={{ backgroundImage: `url(${HeroBg})` }}
      >
        <div className={styles.firstContainer}>
          <p className={styles.mainText}>
            Agency That Can Help You Grow Your
            <br />
            Business Digitally
          </p>
          <p className={styles.subText}>
            Work In The Digital World Includes Web Design, Digital Marketing,
            <br />
            Branding & Strategy, Etc...
          </p>
        </div>

        <div className={styles.ball}>
          <img src={ball} alt="ring" />
        </div>

        <div className={styles.secondContainer}>
          <p className={styles.mainText}>
            Let’s Work Together
            <br />
            With Us
          </p>
          <p className={styles.subText}>
            Partner With Us To Bring Your Vision To Life Through Collaboration,
            Innovation, And Tailored
            <br />
            Solutions That Meet Your Unique Needs. Together, We'll Create
            Something Extraordinary.
          </p>
        </div>

        <div className={styles.thirdContainer}>
          <div className={styles.firstImage}>
            <img src={FirstImage} alt="service 1" />
          </div>
          <div className={styles.secondImage}>
            <img src={SecondImage} alt="service 2" />
          </div>
        </div>

        <div className={styles.fourthContainer}>
          <img src={ThirdImage} alt="service 3" />
        </div>
      </div>

      <div className={styles.buttonWrapper}>
        <Button className={styles.heroButtonOverride}>
          <p>Explore All Services</p>
          <img src={GetstartedImage} alt="get started" />
        </Button>
      </div>
    </div>
  );
}

export default ServicesSection;
