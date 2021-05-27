import Head from "next/head";
import formStyle from "../styles/Form.module.css";
import styles from "../styles/Layout.module.css";
import Link from "next/link";
import { API_URL } from "./api/API";
import { useState } from "react";

function login() {
  return (
    <>
      <Head>
        <title>login Page</title>
      </Head>
      <div>
        <div className={styles.container}>
          <h1>Login</h1>
          If you dont have an login account, you can make one by clicking on the register now button
          <div></div>
          <form className={formStyle.container}>
            <input
              className={formStyle.input}
              type="email"
              placeholder="Email adress"
            />
            <input
              className={formStyle.input}
              type="password"
              placeholder="Password"
            />
            <button className={formStyle.btn} type="button">
              Login
            </button>
            <p>
              You don`t have an accout?{" "}
              <Link href="/register">
                <a className={formStyle.register}>Register Now</a>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default login;
