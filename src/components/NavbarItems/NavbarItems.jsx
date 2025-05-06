import React from "react";
import styles from "./NavbarItems.module.css";

function NavbarItems() {
  return (
    <div className={styles.navbarItems}>
      <p>Home</p>
      <p>About</p>
      <p>Services</p>
      <p>Portfolio</p>
      <p>Contact Us</p>
    </div>
  );
}

export default NavbarItems;
