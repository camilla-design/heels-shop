import Head from "next/head";
import { API_URL } from "./api/API";
import { useContext } from "react";
import { DataContext } from "../store/GlobalState";
import cartStyle from '../styles/Cart.module.css';

function Cart() {
  const {state, dispatch} = useContext(DataContext);
  const { cart } = state

  if(cart.length === 0) return (
  <div className={cartStyle.cartContainer}>
    <h2>Your cart is empty</h2> 
    <img src="/empty-cart.jpg" width="200"/>
    </div>);
  return (
    <>
      <Head>
        <title>Cart</title>
      </Head>
      <div>
        <h1>This is your cart</h1>
      </div>
    </>
  );
}

export default Cart;
