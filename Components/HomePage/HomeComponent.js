import React from "react";
import AppBar from "../AppBar/AppBar";
import styles from "./Home.module.scss";
const HomeComponent = () => {
  return (
    <div className={styles.container}>
      <AppBar />
    </div>
  );
};

export default HomeComponent;
