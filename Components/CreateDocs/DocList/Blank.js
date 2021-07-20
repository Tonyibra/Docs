import React from "react";
import styles from "./Blank.module.scss";
const Blank = () => {
  return (
    <div className={styles.container}>
      <div className={styles.blankContainer}></div>
      <div className={styles.footer}>
        <span>Blank</span>
      </div>
    </div>
  );
};

export default Blank;
