import React from "react";
import { Link } from "react-router-dom";
import styles from "./Error404.module.css";

const Error404 = () => {
  return (
    <div className="container">
      <div className={styles.page}>
        <h1 className={styles.error}>404</h1>
        <p>Page Not Found</p>
        <center>
          The page you are looking for doesn't exist or an other error occured
          <br />
          Go to <Link to="/">HomePage</Link>
        </center>
      </div>
    </div>
  );
};

export default Error404;
