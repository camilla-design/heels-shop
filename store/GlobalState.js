import { createContext, useReducer, useEffect } from "react";
import redusers from "./Reducers";
import { getData } from "../utils/fetchData";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const initialState = { notify: {}, auth: {}, cart: [], modal: {} };
  const [state, dispatch] = useReducer(redusers, initialState);
  const { cart } = state;

  useEffect(() => {
    const firstLogin = localStorage.getItem("firstLogin");
    if (firstLogin) {
      getData("auth/accessToken").then((res) => {
        if (res.err) return localStorage.removeItem("firstLogin");

        dispatch({
          type: "AUTH",
          payload: {
            token: res.access_token,
            user: res.user,
          },
        });
      });
    }
  }, []);

  useEffect(() => {
    const _next_cart = JSON.parse(localStorage.getItem("_next_cart"));
    if (_next_cart) dispatch({ type: "ADD_CART", payload: _next_cart });
  }, []);

  useEffect(() => {
    localStorage.setItem("_next_cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};
