import Head from "next/head";
import formStyle from "../styles/Form.module.css";
import styles from "../styles/Layout.module.css";
import Link from "next/link";
import { postData } from "../utils/fetchData";
import { useState, useContext } from "react";
import { DataContext } from "../store/GlobalState";
import Cookie from "js-cookie";

const login = () => {
  const initialState = { email: "", password: "" };
  const [userData, setUserData] = useState(initialState);
  const { email, password } = userData;

  const { state, dispatch } = useContext(DataContext);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
    dispatch({ type: "NOTIFY", payload: {} });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "NOTIFY", payload: { loading: true } });
    const res = await postData("auth/login", userData);

    if (res.err)
      return dispatch({ type: "NOTIFY", payload: { error: res.err } });
    dispatch({ type: "NOTIFY", payload: { success: res.msg } });

    dispatch({
      type: "AUTH",
      payload: {
        token: res.access_token,
        user: res.user,
      },
    });

    Cookie.set("refreshtoken", res.refresh_token, {
      path: "api/auth/accessToken",
      expires: 7,
    });

    localStorage.setItem("firstLogin", true);
  };
  return (
    <>
      <Head>
        <title>login Page</title>
      </Head>
      <div>
        <div className={styles.container}>
          <h1>Login</h1>
          If you dont have an login account, you can make one by clicking on the
          register now button
          <div></div>
          <form className={formStyle.container} onSubmit={handleSubmit}>
            <input
              className={formStyle.input}
              type="email"
              placeholder="Email adress"
              name="email"
              value={email}
              onChange={handleChangeInput}
            />
            <input
              className={formStyle.input}
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={handleChangeInput}
            />
            <button className={formStyle.btn} type="submit">
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
};

export default login;
