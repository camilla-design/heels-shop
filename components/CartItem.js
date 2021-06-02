import Link from "next/link";
import cartStyle from "../styles/Cart.module.css";
import { decrease, increase } from "../store/Actions";

const CartItem = ({ item, dispatch, cart }) => {
  return (
    <tr className={cartStyle.container}>
      <td>
        <img
          src={`${item.image[0].url}`}
          alt={`${item.image[0].url}`}
          width="100px"
        />
      </td>
      <td>
        <h3 className={cartStyle.margin}>
          <Link href={`/detail/${item.id}`}>
            <a className={cartStyle.title}>{item.title}</a>
          </Link>
        </h3>
        <h4 className={cartStyle.quantity}>${item.quantity * item.price}</h4>
      </td>

      <td>
        <button
          className={cartStyle.quantityBtn}
          onClick={() => dispatch(decrease(cart, item.id))}
          disabled={item.quantity === 1 ? true : false}
        >
          {" "}
          -{" "}
        </button>
        <span className={cartStyle.quantityBtn}>{item.quantity}</span>
        <button
          className={cartStyle.quantityBtn}
          onClick={() => dispatch(increase(cart, item.id))}
        >
          {" "}
          +{" "}
        </button>
      </td>
      <td className={cartStyle.delete}>
        <i
          class="fas fa-trash"
          data-toggle="modal"
          data-target="#myModal"
          onClick={() =>
            dispatch({
              type: "ADD_MODAL",
              payload: { data: cart, id: item.id, title: item.title },
            })
          }
        ></i>
      </td>
    </tr>
  );
};

export default CartItem;
