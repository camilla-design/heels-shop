import Nav from "./Nav";
import styles from "../styles/Layout.module.css";
import Notify from "./Notify";
import Modal from "./Modal";
import Footer from '../components/Footer';

export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <Notify />
      <Modal />
      <div className={styles.container}>
        <main className={styles.main}>{children}</main>
      </div>
      <Footer />
    </>
  );
}
