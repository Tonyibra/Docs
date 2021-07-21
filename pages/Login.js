import React, { useEffect } from "react";
import Head from "next/head";
import LoginComponent from "../Components/Login/LoginComponent";
import HomeComponent from "../Components/HomePage/HomeComponent";
const Login = ({ loading, user }) => {
  useEffect(() => {
    if (user) {
      <HomeComponent />;
    }
  });

  return (
    <div>
      <>
        <div>
          <Head>
            <title>Login | Docs</title>
          </Head>
          <LoginComponent />
        </div>
      </>
    </div>
  );
};

export default Login;
