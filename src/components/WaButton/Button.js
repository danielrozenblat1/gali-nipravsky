import React from 'react';
import styles from "./Button.module.css";

const Button = (props) => {
  const handleButtonClick = () => {
    const formElement = document.getElementById('טופס');
    if (formElement) {
      const y = formElement.getBoundingClientRect().top + window.pageYOffset - 150;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.center}>
      <button className={styles.button} onClick={handleButtonClick}>
        <span className={styles.buttonContent}>
          {props.text}
        </span>
        <div className={styles.shine}></div>
      </button>
    </div>
  );
};

export default Button;