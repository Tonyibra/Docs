import React from "react";
import styles from "./CreateDocs.module.scss";
import Blank from "./DocList/Blank";
const CreateDocument = ({ documents, setLoading, loading }) => {
  return (
    <div className={styles.container}>
      <div className={styles.newDoc}>
        <span>start a new document</span>
        <Blank
          documents={documents}
          setLoading={setLoading}
          loading={loading}
        />
      </div>
    </div>
  );
};

export default CreateDocument;
