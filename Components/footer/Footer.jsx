import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.wrap}>
          <h3 className={styles.logo}>
            Linear<span className={styles.ui}>UI</span>
          </h3>
          <p className={styles.description}>
            Clean & polished UI components for your application
          </p>
        </div>
        <div className={styles.links}>
          <div className={styles.columns}>
            <h4>Socials</h4>
            <a href="">Twitter</a>
            <a href="">Discord</a>
            <a href="">LinkedIn</a>
            <a href="">GitHub</a>
          </div>
          <div className={styles.column}>
            <h4>Misc.</h4>
            <a href="">Release Notes</a>
            <a href="">Documentation</a>
            <a href="">Figma UI Kit</a>
            <a href="">Privacy Policy</a>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>© 2024 Linear UI. All rights reserved.</p>
        <p>Made with ❤️ in India</p>
      </div>
    </div>
  );
};

export default Footer;
