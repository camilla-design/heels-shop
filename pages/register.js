import Head from "next/head";
import formStyle from "../styles/Form.module.css";
import styles from "../styles/Layout.module.css";
import Link from "next/link";
import { useState, useContext } from "react";
import valid from "../utils/valid";
import { DataContext } from "../store/GlobalState";
import { postData } from "../utils/fetchData";

function Register() {
  const initialState = {
    name: "",
    email: "",
    password: "",
    cf_password: "",
  };
  const [userData, setUserData] = useState(initialState);
  const { name, email, password, cf_password } = userData;

  const { state, dispatch } = useContext(DataContext);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
    dispatch({ type: "NOTIFY", payload: {} });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errMsg = valid(name, email, password, cf_password);
    if (errMsg) return dispatch({ type: "NOTIFY", payload: { error: errMsg } });

    dispatch({ type: "NOTIFY", payload: { loading: true } });

    const res = await postData("auth/register", userData);
    if (res.err)
      return dispatch({ type: "NOTIFY", payload: { error: res.err } });

    return dispatch({ type: "NOTIFY", payload: { success: res.mgs } });
  };

  return (
    <>
      <Head>
        <title>Register Page</title>
      </Head>
      <div>
        <div className={styles.container}>
          <h1>Register</h1>
          Will never share your information with anyone
          <div></div>
          <form className={formStyle.container} onSubmit={handleSubmit}>
            <lable>Name</lable>
            <input
              className={formStyle.input}
              type="name"
              placeholder="name"
              id="name"
              name="name"
              value={name}
              onChange={handleChangeInput}
            />
            <lable>Email</lable>
            <input
              className={formStyle.input}
              type="email"
              id="email"
              placeholder="Email adress"
              name="email"
              value={email}
              onChange={handleChangeInput}
            />
            <lable>Confirm Password</lable>
            <input
              className={formStyle.input}
              type="password"
              placeholder="Password"
              id="password"
              name="password"
              value={password}
              onChange={handleChangeInput}
            />
            <lable>Password</lable>
            <input
              className={formStyle.input}
              type="password"
              placeholder="Repeat your password"
              id="password2"
              name="cf_password"
              value={cf_password}
              onChange={handleChangeInput}
            />
            <button className={formStyle.btn} type="submit">
              Register
            </button>
            <p>
              You already have an accout?{" "}
              <Link href="/login">
                <a className={formStyle.register}>Login Now</a>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
