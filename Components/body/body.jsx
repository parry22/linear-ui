import React from "react";
import styles from "./body.module.css";
import image from "../../public/Rectangle 1.png";
import Image from "next/image";
import Features from "../Features/Features";

const body = () => {
  return (
    <div>
      <div className={styles.hero}>
        <h1 className={styles.title}>
          Your shortcut to rapid <br />
          <span className={styles.highlight}>Web3 UI Development</span>
        </h1>
        <p className={styles.subtitle}>
          Spend less time coding from zero and more time creating something
          great.
        </p>
      </div>
      <div className={styles.backgrond}></div>
      <Features />
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
