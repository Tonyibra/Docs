import React from "react";
import AppBar from "../AppBar/AppBar";
import CreateDocument from "../CreateDocs/CreateDocument";
import styles from "./Home.module.scss";
import { useCollectionOnce } from "react-firebase-hooks/firestore";
import { auth, db } from "../../firebase";
import DocList from "../DocList/DocList";
import LinearProgress from "@material-ui/core/LinearProgress";
const HomeComponent = () => {
  const [loading, setLoading] = React.useState(false);
  const userIdentifer = auth.currentUser?.providerData?.[0].email;
  const [documents] = useCollectionOnce(
    db
      .collection("users")
      .doc(userIdentifer)
      .collection("documents")
      .orderBy("timestamp", "desc")
  );
  console.log(documents);
  return (
    <div className={styles.container}>
      {loading && <LinearProgress />}
      <AppBar />
      <CreateDocument
        documents={documents}
        setLoading={setLoading}
        loading={loading}
      />
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
          {documents?.docs.map((document) => (
            <DocList
              key={document.id}
              id={document.id}
              fileName={document.data().docName}
              date={document.data().timestamp}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
