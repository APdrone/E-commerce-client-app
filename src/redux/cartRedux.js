import { createSlice } from "@reduxjs/toolkit";
// import { current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      // console.log(current(state), action.payload);

      // if (!state.products.length) {
      //   state.products.push(action.payload);
      //   state.quantity += 1;
      //   state.totalPrice += action.payload.price * action.payload.quantity;
      // } else {

      //   state.products.forEach((product) => {
      //     if (product.title !== action.payload.title)
      //       state.products.push(action.payload);
      //   });

      // }
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
  },
});

export const { addProduct } = cartSlice.actions;

export default cartSlice.reducer;
