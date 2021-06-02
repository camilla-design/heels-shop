import Link from "next/link";
import cartStyle from "../styles/Cart.module.css";

const CartSummary = ({ item, dispatch, cart }) => {
  return (
    <tr className={cartStyle.container}>
      <td>
        <h3 className={cartStyle.margin}>
          <Link href={`/detail/${item.id}`}>
            <a className={cartStyle.title}>{item.title}</a>
          </Link>
        </h3>
        <h4 className={cartStyle.quantity}>${item.quantity * item.price}</h4>
      </td>

      <td>
        <span>{item.quantity}</span>
      </td>
    </tr>
  );
};

export default CartSummary;
