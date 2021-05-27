import Nav from "./Nav";
import styles from "../styles/Layout.module.css";
import Notify from './Notify';

export default function Layout({ children }) {
  return (
    <>
    <Nav />
    <Notify />
      <div className={styles.container}>
      
      
        <main className={styles.main}>{children}</main>
      </div>
    </>
  );
}
