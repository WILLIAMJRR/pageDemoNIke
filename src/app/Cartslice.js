import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
	name: "cart",
	initialState: false,
	reducers: {
		setOpenCloseCart: (state, action) => action.payload,
	},
});

export const { setOpenCloseCart } = CartSlice.actions;

export default CartSlice.reducer;
