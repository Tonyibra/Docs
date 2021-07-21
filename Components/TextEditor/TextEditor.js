import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState } from "draft-js";
import { useRouter } from "next/router";
import { db, auth } from "../../firebase";
import { convertFromRaw, convertToRaw } from "draft-js";
import Header from "../TextEditor/EditorHeader/Header.js";
("draft-js");
const Editor = dynamic(
  () => import("react-draft-wysiwyg").then((module) => module.Editor),
  {
    ssr: false,
  }
);
import Head from "next/head";
import styles from "./TextEditor.module.scss";
import { useDocumentOnce } from "react-firebase-hooks/firestore";
import { LinearProgress } from "@material-ui/core";
const TextEditor = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const router = useRouter();
  const id = router.query.id;
  const email = auth?.currentUser?.email;
  let [docName, setDocName] = useState("");
  const [snapshot] = useDocumentOnce(
    db.collection("users").doc(email).collection("documents").doc(id)
  );

  useEffect(() => {
    if (snapshot?.data()?.editorState) {
      setEditorState(
        EditorState.createWithContent(
          convertFromRaw(snapshot?.data()?.editorState)
        )
      );
    }
    setDocName(snapshot?.data()?.docName);
  }, [snapshot]);
  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);

    db.collection("users")
      .doc(email)
      .collection("documents")
      .doc(id)
      .set(
        {
          editorState: convertToRaw(editorState.getCurrentContent()),
        },
        { merge: true }
      );
  };

  return (
    <div>
      <>
        <Head>{`${docName} | Docs`}</Head>
        {snapshot?.data() ? (
          <div className={styles.container}>
            <Header docName={docName} id={id} setDocName={setDocName} />
            <Editor
              editorState={editorState}
              onEditorStateChange={onEditorStateChange}
              toolbarClassName={styles.toolbarClassName}
              editorClassName={styles.editorClassName}
            />
          </div>
        ) : (
          <LinearProgress />
        )}
      </>
    </div>
  );
};

export default TextEditor;
