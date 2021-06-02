import Head from "next/head";
import Link from "next/link";
import { useContext, useState, useEffect } from "react";
import { DataContext } from "../store/GlobalState";
import cartStyle from "../styles/Cart.module.css";
import CartItem from "../components/CartItem";
import CartSummary from "../components/CartSummary";
import Form from "react-bootstrap/Form";
import FormStyle from "../styles/Form.module.css";

function Cart() {
  const { state, dispatch } = useContext(DataContext);
  const { cart, auth } = state;

  const [total, setTotal] = useState(0);

  useEffect(() => {
    const getTotal = () => {
      const res = cart.reduce((prev, item) => {
        return prev + item.price * item.quantity;
      }, 0);
      setTotal(res);
    };
    getTotal();
  }, [cart]);

  if (cart.length === 0)
    return (
      <div className={cartStyle.cartContainer}>
        <h2>Your cart is empty</h2>
        <img src="/empty-cart.jpg" width="200" />
      </div>
    );
  return (
    <>
      <div className={cartStyle.dFlex}>
        <Head>
          <title>Cart</title>
        </Head>
        <div>
          <div>
            <h2 className={cartStyle.heading}>Shopping cart</h2>

            <table className={cartStyle.container}>
              <tbody>
                {cart.map((item) => (
                  <CartItem
                    key={item.id}
                    item={item}
                    dispatch={dispatch}
                    cart={cart}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className={cartStyle.formContainer}>
          <h2 className={cartStyle.heading}>Order summary</h2>
          <Form className={FormStyle.container}>
            <h3>Summary</h3>
            <hr></hr>
            <div>
              {cart.map((item) => (
                <CartSummary
                  key={item.id}
                  item={item}
                  dispatch={dispatch}
                  cart={cart}
                />
              ))}
            </div>
            <hr></hr>
            <h3 className={cartStyle.total}>
              Total cost: <span>${total}</span>
            </h3>
            <Link
              className={cartStyle.payment}
              href={auth.user ? "#" : "/login"}
            >
              <a className={cartStyle.payment}>
                <i class="far fa-credit-card"></i> Chackout
              </a>
            </Link>
          </Form>
        </div>
      </div>
    </>
  );
}

export default Cart;
