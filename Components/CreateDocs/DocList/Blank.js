import React, { useState } from "react";
import styles from "./Blank.module.scss";
import { Modal } from "@material-ui/core";
import { auth, db } from "../../../firebase";
import firebase from "firebase";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/router";
import { route } from "next/dist/next-server/server/router";

const Blank = ({ documents, setLoading, loading }) => {
  const router = useRouter();
  let id = null;
  const [docName, setDocName] = useState("Blank Document");
  const userIdentifer = auth.currentUser?.providerData?.[0].email;
  const createDocument = async () => {
    try {
      setLoading(true);
      const data = await db
        .collection("users")
        .doc(userIdentifer)
        .collection("documents")
        .add({
          docName,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
      id = data.id;
      setLoading(false);
      console.log(data);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
    if (!loading) {
      goToDocument();
    }
  };

  const goToDocument = () => {
    console.log(`docs.id : ${id}`);
    router.push(`/document/${id}`);
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
