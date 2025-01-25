import React from "react";
import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        Web3 Kit by{" "}
        <span className={styles.highlight}>
          Linear<span className={styles.ui}>UI</span>
        </span>
      </div>
      <div className={styles.nav}>
        <a href="#" className={styles.link}>
          Figma UI Kit
        </a>
        <a href="#" className={styles.link}>
          Documentation
        </a>
        <a href="#" className={styles.link}>
          Twitter
        </a>
        <a href="#" className={styles.link}>
          Discord
        </a>
      </div>

      <button className={styles.button}>
        Browse all components <span className={styles.icon}>→</span>
      </button>
    </header>
  );
};

export default Header;
