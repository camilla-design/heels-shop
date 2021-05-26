import formStyle from "../styles/Form.module.css";
import styles from "../styles/Layout.module.css";
import { useState } from "react";
import { setCookie } from "nookies";
import Router from "next/router";
import Head from "next/head";
import { API_URL } from "./api/API";

function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin() {
    const loginInfo = {
      identifier: username,
      password: password,
    };

    const login = await fetch(`${API_URL}/auth/local`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginInfo),
    });

    const loginResponse = await login.json();

    setCookie(null, "jwt", loginResponse.jwt, {
      path: "/admin",
    });

    Router.push("/admin");
  }

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <div className={styles.container}>
        <h1>Login</h1>
        You need to login to access this page
        <div></div>
        <form className={formStyle.container}>
          <input
            className={formStyle.input}
            type="email"
            placeholder="Email adress"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
          <input
            className={formStyle.input}
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <button className={formStyle.btn} type="button" onClick={() => handleLogin()}>
            Login
          </button>
        </form>
      </div>
    </>
  );
}

export default AdminLogin;
