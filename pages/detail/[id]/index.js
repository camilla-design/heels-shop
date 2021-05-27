import Link from "next/link";
import Head from "next/head";
import styles from "../../../styles/Layout.module.css";
import productStyle from "../../../styles/Product.module.css";
import { API_URL } from "../../api/API";
import { motion } from "framer-motion";

let easing = [0.6, -0.05, 0.01, 0.99];

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.6, ease: easing },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

const product = ({ product }) => {
  return (
    <>
      <Head>
        <title>Product</title>
      </Head>
      <motion.div
        initial="initial"
        animate="animate"
        exit={{ opacity: 0 }}
        className={styles.containerProducts}
      >
        <div className={styles.flex}>
          <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            className={styles.containerProductImage}
          >
            <motion.img
              animate={{ x: 0, opacity: 1 }}
              initial={{ x: 200, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.2 }}
              src={`${product.image[0].url}`}
              width="300"
            />
          </motion.div>
          <div className={styles.descriptionContainer}>
            <Link href="/">
              <a>Go back</a>
            </Link>
            <h1>{product.title}</h1>
            <p className={productStyle.description}>{product.description}</p>
            <div className={productStyle.qty}>
              <div className={productStyle.minus}>-</div>
              <div className={productStyle.amount}>1</div>
              <div className={productStyle.add}>+</div>

              <span className={productStyle.priceDescription}>
                Price: {product.price}$
              </span>
            </div>
            <div className={productStyle.buttons}>
              <button className={productStyle.cart}>Add To Cart</button>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export const getServerSideProps = async (context) => {
  const res = await fetch(`${API_URL}/products/${context.params.id}`);
  const product = await res.json();

  return {
    props: {
      product,
    },
  };
};

export default product;
