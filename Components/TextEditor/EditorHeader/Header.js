import React from "react";
import styles from "./Header.module.scss";
import collection from "../../../icons/collection.svg";
import { TextField } from "@material-ui/core";
import { auth, db } from "../../../firebase";
import { useRouter } from "next/router";
const Header = ({ docName, setDocName, id }) => {
  const router = useRouter();
  const email = auth.currentUser?.email;
  const updateDocName = async (value) => {
    await setDocName(value);
    db.collection("users").doc(email).collection("documents").doc(id).update({
      docName: value,
    });
  };
  const homeHandler = () => {
    router.push("/");
  };
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img
          onClick={homeHandler}
          src={collection}
          style={{ cursor: "pointer" }}
        />
        <TextField
          id="standard-basic"
          value={docName}
          onChange={(e) => updateDocName(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Header;
