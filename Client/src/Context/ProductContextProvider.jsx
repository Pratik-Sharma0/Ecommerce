import { useContext, useEffect, useReducer } from "react";
import { AppContext } from "./Product";
import axios from "axios";
const API = "https://dummyjson.com/products";

const ProductContextProvider = ({ children }) => {
  const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    limitedStocks: [],
    isSingleLoading: false,
    singleProduct: {},
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "SET_LOADING":
        return {
          ...state,
          isLoading: true,
        };
      case "SET_API_DATA":
        const limitedProducts = action.payload.products.filter((currEle) => {
          return currEle.stock <= 50 && currEle.category === "smartphones";
        });

        return {
          ...state,
          isLoading: false,
          products: action.payload.products,
          limitedStocks: limitedProducts,
        };
      case "SET_SINGLE_LOADING":
        return {
          ...state,
          isSingleLoading: true,
        };
      case "SET_SINGLE_PRODUCT":
        return {
          ...state,
          isSingleLoading: false,
          singleProduct: action.payload,
        };
      case "SET_SINGLE_ERROR":
        return {
          ...state,
          isSingleLoading: false,
          isError: true,
        };

      case "API_ERROR":
        return {
          ...state,
          isLoading: false,
          isError: true,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  //single page api call

  const getSingleProduct = async (url) => {
    dispatch({ type: "SET_SINGLE_LOADING" });
    try {
      const res = await axios.get(url);

      const singleProduct = await res.data;

      dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });
    } catch (error) {
      dispatch({ type: "SET_SINGLE_ERROR" });
    }
  };

  const getProducts = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(url);
      const products = await res.data;
      dispatch({ type: "SET_API_DATA", payload: products });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

  useEffect(() => {
    getProducts(API);
  }, []);

  return (
    <AppContext.Provider value={{ ...state, getSingleProduct }}>
      {children}
    </AppContext.Provider>
  );
};

//Custom Hooks

const useProductContext = () => {
  return useContext(AppContext);
};

export { ProductContextProvider, useProductContext };
