import React, { useEffect } from "react";
import styles from "./Navbar.module.css";
import logo from "./logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add(`${styles["is-sticky"]}`);
      } else {
        elementId.classList.remove(`${styles["is-sticky"]}`);
      }
    });
    window.scrollTo(0, 0);
  });

  return (
    <div
      className="container-fluid p-0"
      id="navbar"
      style={{ boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)" }}
    >
      <div className="container">
        <div className={styles["navbar-section"]}>
          <img className={styles.logo} src={logo} alt="logo" />
          <div className={styles.menu}>
            <ul>
              <li>
                <Link to="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link to="/about">
                  <a>About Us</a>
                </Link>
              </li>
              <li className={styles.dropdown}>
                <Link to="/class9">
                  <a className={styles.dropbtn}>Select Class</a>
                  <div className={styles["dropdown-content"]}>
                    <li href="#">Class IX</li>
                    <li href="#">Class X</li>
                    <li href="#">Class XI</li>
                    <li href="#">Class XII</li>
                  </div>
                </Link>
              </li>
              <li className={styles.dropdown}>
              <Link to="/scholarship">
                  <a className={styles.dropbtn}>Scholarship Tests</a>
                  <div className={styles["dropdown-content"]}>
                    <li href="#">Beginner</li>
                    <li href="#">Intermediate</li>
                    <li href="#">Advanced</li>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/faqs">
                  <a>FAQs</a>
                </Link>
              </li>
            </ul>
          </div>
          <Link className={styles.button} to="/contact">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
