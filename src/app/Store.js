import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./Cartslice.js";
import CarItemsSlice from "./CarItemsSlice.js";

export default configureStore({
	reducer: {
		CartSlice,
		CarItemsSlice,
	},
});
