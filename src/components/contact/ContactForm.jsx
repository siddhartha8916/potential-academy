import React from "react";
import classes from "./ContactForm.module.css";

const ContactForm = () => {
  return (
    <>
      <form className={classes.form}>
        
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" />

          <label htmlFor="email">Email ID</label>
          <input type="email" id="email" name="email" />
      
        <button type="submit" className={classes.button}>
          Submit
        </button>
      </form>
    </>
  );
};

export default ContactForm;
