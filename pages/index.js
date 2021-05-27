import Head from "next/head";
import Header from "../components/Header";
import ProductList from "../components/ProductList";
import styles from "../styles/Layout.module.css";
import { API_URL } from "./api/API";

export default function Home({ products }) {
  return (
    <>
      <Head>
        <title>Heals shop</title>
      </Head>
      <div>
        <img className={styles.heroImage} src="/hero-image.jpg" width={375} />
      </div>

      <div className={styles.wrapper}>
        <Header />

        <ProductList products={products} />
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`${API_URL}/products`);
  const products = await res.json();

  return {
    props: {
      products,
    },
  };
};
