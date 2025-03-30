import { createSlice } from "@reduxjs/toolkit";
import { productSlice } from "./productSlice";

const getBasketFromStorage = () => {
  if (localStorage.getItem("basket")) {
    return JSON.parse(localStorage.getItem("basket"));
  } else {
    return [];
  }
};

const initialState = {
  products: getBasketFromStorage(),
  drawer: false,
  totalAmount: 0,
};

const writeToBasketToStorage = (basket) => {
  localStorage.setItem("basket", JSON.stringify(basket));
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      const findProduct =
        state.products && state.products.find((product) => product.id === action.payload.id);
      if (findProduct) {
        const extractedProduct = state.products.filter(
          (product) => product.id !== action.payload.id
        );
        findProduct.count += action.payload.count;
        state.products = [...extractedProduct, findProduct];
        writeToBasketToStorage(state.products);
      } else {
        state.products = [...state.products, action.payload];
        writeToBasketToStorage(state.products);
      }
    },

    setDrawer: (state) => {
      state.drawer = !state.drawer;
    },

    calculteBasket: (state) => {
        state.totalAmount =0;
      state.totalAmount = parseFloat(
        state.products.reduce((acc, product) => acc + product.price * product.count, 0)
      ).toFixed(2);
    },

    removeFromBasket: (state, action) => {
        // Məhsulu Redux state-dən sil
        state.products = state.products.filter((product) => product.id !== action.payload);
        // localStorage-i yenilə
        writeToBasketToStorage(state.products);
        state.totalAmount = state.products.reduce((acc, product) => acc + product.price * product.count, 0).toFixed(2);
      },
  },
});

export const { addToBasket, setDrawer, calculteBasket,removeFromBasket} = basketSlice.actions;
export default basketSlice.reducer;
