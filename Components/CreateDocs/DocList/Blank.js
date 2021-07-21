import React, { useState } from "react";
import styles from "./Blank.module.scss";
import { Modal } from "@material-ui/core";
import { auth, db } from "../../../firebase";
import firebase from "firebase";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/router";
import { useCollectionData } from "react-firebase-hooks/firestore";
const Blank = () => {
  const router = useRouter();
  const [docs, setDocs] = React.useState([]);
  const id = uuidv4().replaceAll("-", "");
  const [docName, setDocName] = useState("Blank Document");
  const userIdentifer = auth.currentUser?.providerData?.[0].email;
  const createDocument = async () => {
    console.log(id);
    try {
      await db
        .collection("users")
        .doc(userIdentifer)
        .collection("documents")
        .add({
          docName,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
          id,
        });
    } catch (error) {
      console.log(error);
    }
  };

  const goToDocument = () => {};

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
