import React from "react";
import styles from "./Portfolio.module.css";
import PortfolioBg from "../../assets/portfolio_section.png";
import Button from "../Button/Button";
import GetstartedImage from "../../assets/get_started.png";
import Mstore from "../../assets/mstore.png";
import Mangstore from "../../assets/mangstore.png";
import Mbeauty from "../../assets/mbeauty.png";
import jual from "../../assets/jual.png";
import Person1 from "../../assets/person1.png";
import Person2 from "../../assets/person2.png";
import Person3 from "../../assets/person3.png";
import Person4 from "../../assets/person4.png";
import Person5 from "../../assets/person5.png";
import Person6 from "../../assets/person6.png";

function Portfolio() {
  return (
    <div
      className={styles.mainContainer}
      style={{ backgroundImage: `url(${PortfolioBg})` }}
    >
      <div className={styles.firstContainer}>
        <div className={styles.firstsubCon}>
          <p className={styles.mainText}>Our Projects</p>
          <p className={styles.subText}>
            Explore our projects to see how we've turned ideas into <br />
            impactful solutions. Each project reflects our commitment to <br />
            quality, creativity, and results.
          </p>
        </div>

        <Button className={styles.heroButtonOverride}>
          <p>All Portfolio</p>
          <img src={GetstartedImage} alt="all portfolio" />
        </Button>
      </div>
      <div className={styles.secondContainer}>
        <div className={styles.projectContainer}>
          <img src={Mstore} alt="mstore" />
          <p className={styles.projectHeading}>MStore</p>
          <p className={styles.subText}>
            Lorem ipsum dolor sit amet consectetur. Pulvinar nunc euismod metus{" "}
            <br />
            scelerisque.
          </p>
        </div>
        <div className={styles.projectContainer}>
          <img src={Mbeauty} alt="mbeauty" />
          <p className={styles.projectHeading}>Beauty</p>
          <p className={styles.subText}>
            Lorem ipsum dolor sit amet consectetur. Mi sed cras arcu lorem ac mi
            sed <br /> sapien aliquet.
          </p>
        </div>
      </div>
      <div className={styles.secondContainer}>
        <div className={styles.projectContainer}>
          <img src={Mangstore} alt="mangstore" />
          <p className={styles.projectHeading}>MangStore</p>
          <p className={styles.subText}>
            Lorem ipsum dolor sit amet consectetur. Pulvinar nunc euismod metus{" "}
            <br />
            scelerisque.
          </p>
        </div>
        <div className={styles.projectContainer}>
          <img src={jual} alt="jual" />
          <p className={styles.projectHeading}>MangCoding</p>
          <p className={styles.subText}>
            Lorem ipsum dolor sit amet consectetur. Mi sed cras arcu lorem ac mi
            sed <br /> sapien aliquet.
          </p>
        </div>
      </div>
      <div className={styles.thirdContainer}>
        <p className={styles.mainText}>What they say about us</p>
        <p className={styles.subText}>Here form their Point Of View</p>
      </div>
      <div className={styles.fourthContainer}>
        <img src={Person1} alt="person1" />
        <img src={Person2} alt="person2" />
        <img src={Person3} alt="person3" />
      </div>
      <div className={styles.fourthContainer}>
        <img src={Person4} alt="person4" />
        <img src={Person5} alt="person5" />
        <img src={Person6} alt="person6" />
      </div>
    </div>
  );
}

export default Portfolio;
