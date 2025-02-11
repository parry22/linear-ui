"use client";

import React, { useState } from "react";
import styles from "./header.module.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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

      <button className={styles.menuButton} onClick={toggleMenu}>
        ☰
      </button>

      <div className={`${styles.mobileNav} ${isMenuOpen ? styles.open : ""}`}>
        <button className={styles.closeButton} onClick={toggleMenu}>
          ✖
        </button>
        <nav className={styles.mobileMenu}>
          <a href="#" className={styles.link} onClick={toggleMenu}>
            Figma UI Kit
          </a>
          <a href="#" className={styles.link} onClick={toggleMenu}>
            Documentation
          </a>
          <a href="#" className={styles.link} onClick={toggleMenu}>
            Twitter
          </a>
          <a href="#" className={styles.link} onClick={toggleMenu}>
            Discord
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
