import React, { useState } from "react";
import styles from "./Blank.module.scss";
import { Modal } from "@material-ui/core";
import { auth, db } from "../../../firebase";
import firebase from "firebase";

const Blank = () => {
  const [docs, setDocs] = React.useState([]);

  const [docName, setDocName] = useState("Blank Document");
  const userIdentifer = auth.currentUser?.providerData?.[0].email;
  const createDocument = async () => {
    try {
      await db
        .collection("users")
        .doc(userIdentifer)
        .collection("documents")
        .add({
          docName,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={styles.container}>
      <div onClick={createDocument} className={styles.blankContainer}></div>
      <div className={styles.footer}>
        <span>Blank</span>
      </div>
    </div>
  );
};

export default Blank;
