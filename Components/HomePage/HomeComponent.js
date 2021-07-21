import React from "react";
import AppBar from "../AppBar/AppBar";
import CreateDocument from "../CreateDocs/CreateDocument";
import styles from "./Home.module.scss";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { auth, db } from "../../firebase";
import DocList from "../DocList/DocList";
const HomeComponent = () => {
  const userIdentifer = auth.currentUser?.providerData?.[0].email;
  const [documents] = useCollectionData(
    db
      .collection("users")
      .doc(userIdentifer)
      .collection("documents")
      .orderBy("timestamp")
  );
  console.log(documents);
  return (
    <div className={styles.container}>
      <AppBar />
      <CreateDocument />
      <div className={styles.header}>
        <span>My Documents</span>
        <span>Date Created</span>
      </div>
      <div
        style={{
          paddingTop: 32,
          display: "flex",
          padding: "4px 0px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
          }}
        >
          {documents?.map((document) => (
            <DocList key={document.id} document={document} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
