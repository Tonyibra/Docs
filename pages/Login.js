import React, { useEffect } from "react";
import Head from "next/head";
import LoginComponent from "../Components/Login/LoginComponent";
import { auth } from "../firebase";
import { useRouter } from "next/router";
const Login = ({ loading }) => {
  const router = useRouter();
  useEffect(() => {
    if (auth) {
      router.push("/");
    }
  });

  return (
    <div>
      <>
        {loading && (
          <div>
            <Head>
              <title>Login | Docs</title>
            </Head>
            <LoginComponent />
          </div>
        )}
      </>
    </div>
  );
};

export default Login;
