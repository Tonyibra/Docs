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
      {documents?.map((document) => (
        <DocList key={document.id} />
      ))}
    </div>
  );
};

export default HomeComponent;
