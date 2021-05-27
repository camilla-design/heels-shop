import Head from "next/head";
import { API_URL } from "./api/API";
import { useState } from "react";

function Cart() {
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
