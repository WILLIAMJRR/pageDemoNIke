import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
//esto es un estado que se va a usar en toda la aplicacion, es un estado global
const CartItemsSlice = createSlice({
	name: "CartItems",

	//esta logica se basa en que el carro de compras es un array de objetos, cada objeto es un item
	//el objeto tiene un id, un titulo, una imagen, un precio y una cantidad
	//la logica se basa en que si el id del item que se esta agregando al carro de compras, ya existe en el carro de compras
	//entonces se le suma 1 a la cantidad de ese item, si no, se agrega el item al carro de compras
	//el carro de compras se guarda en el localstorage

	initialState: {
		//logica para que el carro de compras no se borre al recargar la pagina
		//el getItem del localstorage, busca el item con la key "cartItems"
		//si hay algo en el localstorage, entonces se parsea y se agrega al array de cartItems si no, se agrega un array vacio
		cartItems: localStorage.getItem("cartItems")
			? JSON.parse(localStorage.getItem("cartItems"))
			: [],
		cartTotalAmount: 0,
		cartTotalquantity:0,
	},
	reducers: {
		//logica del carro de compras
		setAddCartItem: (state, action) => {
			//en el index de cartItems, si el id del item es igual al id del item que se esta agregando,
			//entonces se le suma 1 a la cantidad de ese item, si no, se agrega el item al array de cartItems
			const index = state.cartItems.find(
				(item) => item.id === action.payload.id,
			);

			if (index) {
				index.quantity += 1;

				toast.success(`Item quantity increased`);
			} else {
				state.cartItems.push({ ...action.payload, quantity: 1 });

				toast.success(`${action.payload.title} added to cart`);
			}

			localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
		},

		//logica para remover un item del carro de compras
		setRemoveItemCart: (state, action) => {
			const removeItem = state.cartItems.filter(
				(item) => item.id !== action.payload.id,
			);
			state.cartItems = removeItem;

			console.log(removeItem);

			localStorage.setItem("cartItems", JSON.stringify(state.cartItems));

			toast.success(`${action.payload.title} removed from cart`);
		},

		//logica para aumentar la cantidad de un item en el carro de compras

		//en el index de cartItems, si el id del item es igual al id del item que se esta agregando,
		setIncreaseItemCart: (state, action) => {
			const index = state.cartItems.find(
				(item) => item.id === action.payload.id,
			);

			index.quantity += 1;

			toast.success(`Item quantity increased`);

			localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
		},

		//logica para disminuir la cantidad de un item en el carro de compras

		setDecreaseItemCart: (state, action) => {
			const index = state.cartItems.find(
				(item) => item.id === action.payload.id,
			);

			console.log(index.quantity);
			//si la cantidad del item es mayor a 1, entonces se le resta 1 a la cantidad de ese item
			//si no, se remueve el item del carro de compras

			if (index.quantity > 1) {
				index.quantity -= 1;

				toast.success(`Item quantity decreased`);

				localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
			} else {
				const removeItem = state.cartItems.filter(
					(item) => item.id !== action.payload.id,
				);
				state.cartItems = removeItem;

				toast.success(`${action.payload.title} removed from cart`);

				localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
			}
		},

		//logica para limpiar el carro de compras

		setClearCart: (state, action) => {
			state.cartItems = [];
			toast.success(`Cart cleared`);
			localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
		},

		//logica para calcular el precio total por la  cantidad de items en el carro de compras

		setQuantity: (state, action) => {
			let totalQuantity = state.cartItems.reduce(
				(cartTotal, CartItem) => {
					const { quantity } = CartItem;
					cartTotal.totalQuantity += quantity;

					return cartTotal;
				},
				{
					totalQuantity: 0,
				},
			);

			state.cartTotalquantity = totalQuantity;
		},

		setTotals: (state, action) => {
			let { totalAmount } = state.cartItems.reduce(
				(cartTotal, CartItem) => {
					const { price, quantity } = CartItem;
					const itemTotal = price * quantity;

					cartTotal.totalAmount += itemTotal;

					return cartTotal;
				},
				{
					totalAmount: 0,
				},
			);

			totalAmount = parseFloat(totalAmount);

			state.cartTotalAmount = totalAmount;
		},
	},
});

export const {
	setAddCartItem,
	setRemoveItemCart,
	setIncreaseItemCart,
	setDecreaseItemCart,
	setClearCart,
	setQuantity,
	setTotals,
} = CartItemsSlice.actions;

export const selectCartItems = (state) => state.CarItemsSlice.cartItems;

export const selectCartTotalAmount = (state) =>
	state.CarItemsSlice.cartTotalAmount;

export const selectCartTotalQuantity = (state) =>
	state.CarItemsSlice.cartTotalquantity;

export default CartItemsSlice.reducer;
