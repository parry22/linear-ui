import React from "react";
import styles from "./body.module.css";

const body = () => {
  return (
    <div>
      <div className={styles.hero}>
        <h1 className={styles.title}>
          On a mission to make <br />
          <span className={styles.highlight}>Internet beautiful again</span>
        </h1>
        <p className={styles.subtitle}>
          Spend less time coding from zero and more time creating<br></br> something
          great by using ready.
        </p>
      </div>
      <div className={styles.backgrond}></div>
      <div className={styles.wrapper}>
        <h2 className={styles.wrapHeading}>Feeling something custom?</h2>
        <p className={styles.wrapText}>
          Contact me to get customised and talented UI for your product
        </p>
        <button className={styles.wrapBtn}>
          Get in touch <span>→</span>
        </button>
      </div>
    </div>
  );
};

export default body;
