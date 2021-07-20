import React from "react";
import Head from "next/Head";
import Login from "../Components/Login/Login";
const LoginScreen = () => {
  return (
    <div>
      <>
        <Head>
          <title>Login | Docs</title>
        </Head>
      </>
      <Login />
    </div>
  );
};

export default LoginScreen;
