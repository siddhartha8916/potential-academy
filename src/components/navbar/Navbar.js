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
                <Link to="/" style={{textDecoration:'none'}}>
                  <p>Home</p>
                </Link>
              </li>
              <li>
                <Link to="/about" style={{textDecoration:'none'}} >
                  <p>About Us</p>
                </Link>
              </li>
              <li className={styles.dropdown}>
                <Link to="/class9" style={{textDecoration:'none'}} >
                  <p className={styles.dropbtn}>Select Class</p>
                  <div className={styles["dropdown-content"]}>
                    <p href="#">Class IX</p>
                    <p href="#">Class X</p>
                    <p href="#">Class XI</p>
                    <p href="#">Class XII</p>
                  </div>
                </Link>
              </li>
              <li className={styles.dropdown}>
              <Link to="/scholarship" style={{textDecoration:'none'}} >
                  <p className={styles.dropbtn}>Scholarship Tests</p>
                  <div className={styles["dropdown-content"]}>
                    <p href="#">Beginner</p>
                    <p href="#">Intermediate</p>
                    <p href="#">Advanced</p>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/faqs" style={{textDecoration:'none'}} >
                  <p>FAQs</p>
                </Link>
              </li>
            </ul>
          </div>
          <Link className={styles.button}  style={{textDecoration:'none'}} to="/contact">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
