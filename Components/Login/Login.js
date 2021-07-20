import React from "react";
import Button from "@material-ui/core/Button";
import styles from "./Login.module.scss";
const Login = () => {
  return (
    <div className={styles.loginContainer}>
      <span className={styles.loginText}>Login in with Google</span>
      <Button variant="contained" color="primary">
        Login
      </Button>
    </div>
  );
};

export default Login;
