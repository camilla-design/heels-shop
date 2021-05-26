import Link from "next/link";
import productStyle from "../styles/Product.module.css";
import { motion } from "framer-motion";

let easing = [0.6, -0.05, 0.01, 0.99];

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

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const ProductItem = ({ product }) => {
  return (
    <Link href="/detail/[id]" as={`/detail/${product.id}`}>
      <motion.div
        className={productStyle.containerCard}
        initial="initial"
        animate="animate"
        exit={{ opacity: 0 }}
      >
        <motion.a variants={stagger} className={productStyle.card}>
          <motion.img
            initial={{ x: 60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            src={`${product.image[0].url}`}
            width="100"
          />
          <motion.div
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h4>{product.title}</h4>
            <p>
              <img src="/star-regular.svg" width="20" />
              {product.rates}
            </p>
            <p className={productStyle.price}>${product.price}</p>
          </motion.div>
        </motion.a>
      </motion.div>
    </Link>
  );
};

export default ProductItem;
