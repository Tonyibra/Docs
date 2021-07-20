import React from "react";
import Button from "@material-ui/core/Button";
import styles from "./Login.module.scss";
import { auth } from "../../firebase";
import firebase from "firebase";
import "firebase/auth";
const Login = () => {
  const loginHandler = () => {
    var provider = new firebase.auth.GoogleAuthProvider();

    firebase
      .auth()
      .signInWithPopup(provider)
      .then((user) => {
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className={styles.loginContainer}>
      <span className={styles.loginText}>Login in with Google</span>
      <Button onClick={loginHandler} variant="contained" color="primary">
        Login
      </Button>
    </div>
  );
};

export default Login;
