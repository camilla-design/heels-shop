import ProductItem from "./ProductItem";
import productStyle from "../styles/Product.module.css";

const ProductList = ({ products }) => {
  return (
    <div className={productStyle.grid}>
      {products.map((product) => (
        <ProductItem product={product} />
      ))}
    </div>
  );
};

export default ProductList;
