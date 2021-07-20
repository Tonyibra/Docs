import React from "react";
import AppBar from "../AppBar/AppBar";
import CreateDocument from "../CreateDocs/CreateDocument";
import styles from "./Home.module.scss";
const HomeComponent = () => {
  return (
    <div className={styles.container}>
      <AppBar />
      <CreateDocument />
    </div>
  );
};

export default HomeComponent;
