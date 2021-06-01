export const ACTIONS = {
  NOTIFY: "NOTIFY",
  AUTH: "AUTH",
  ADD_CART: "ADD_CART",
};

export const addToCart = (product, cart) => {
  const check = cart.every((item) => {
    return item.id !== product.id;
  });

  if (!check)
    return {
      type: "NOTIFY",
      payload: { success: "The product has been added to cart" },
    };

  return { type: "ADD_CART", payload: [...cart, { ...product, quantity: 1 }] };
};
