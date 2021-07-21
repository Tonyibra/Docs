import React, { useState } from "react";
import { useDocumentOnce } from "react-firebase-hooks/firestore";
import { db, auth } from "../../firebase";
import Login from "../Login";
import Head from "next/head";
import TextEditor from "../../Components/TextEditor/TextEditor";
import Header from "../../Components/TextEditor/EditorHeader/Header";
import { useCollectionOnce } from "react-firebase-hooks/firestore";

const document = () => {
  if (!auth) return <Login />;

  return (
    <>
      <div>
        <TextEditor />
      </div>
    </>
  );
};

export default document;
