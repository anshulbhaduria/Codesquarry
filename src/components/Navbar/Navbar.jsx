import React from "react";
import Logo from "../Logo/Logo";
import NavbarItems from "../NavbarItems/NavbarItems";
import Button from "../Button/Button";
import ContactUsImage from "..//../assets/Contact_Us.png";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <a href="/">
        <Logo />
      </a>
      <NavbarItems />
      <Button>
        <p>Contact Us</p>
        <img src={ContactUsImage} alt="Contact Us" />
      </Button>
    </nav>
  );
}

export default Navbar;
