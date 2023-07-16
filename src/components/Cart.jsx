import { useEffect } from "react";
import CartCounter from "./cart/CartCounter";
import CartEmpty from "./cart/CartEmpty";
import CartItem from "./cart/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { setOpenCloseCart } from "/src/app/Cartslice.js";
import {
	selectCartItems,
	selectCartTotalAmount,
	selectCartTotalQuantity,
	setClearCart,
	setQuantity,
	setTotals,
} from "../app/CarItemsSlice";
import toast, { Toaster } from "react-hot-toast";

const Cart = () => {
	const dispatch = useDispatch();

	const ifCartState = useSelector((state) => state.CartSlice);
	const cartItems = useSelector(selectCartItems);
	const totalQuantity = useSelector(selectCartTotalQuantity);
	const totalAmount = useSelector(selectCartTotalAmount);

	useEffect(() => {
		//el useEffect se ejecuta cada vez que cambia el estado de cartItems
		//cuando se agrega un item al carrito se ejecuta el useEffect
		//cuando se elimina un item del carrito se ejecuta el useEffect
		//cuando se aumenta la cantidad de un item en el carrito se ejecuta el useEffect
		//cuando se disminuye la cantidad de un item en el carrito se ejecuta el useEffect
		//cuando se limpia el carrito se ejecuta el useEffect
		dispatch(setQuantity());
		dispatch(setTotals());
	}, [cartItems, dispatch]);

	//cerrar el carrito
	const OffcartToggle = () => {
		dispatch(setOpenCloseCart(!ifCartState));
	};

	const onClearItem = () => {
		dispatch(setClearCart());
		toast.success(`thank you for your purchase`);

	};
	return (
		<div
			className={`fixed top-0 left-0 right-0 bottom-0 blur-effect-theme
      w-full h-screen opacity-100 z-[250] ${
				ifCartState
					? "opacity-100 visible translate-x-0 transition-all duration-300 ease-in-out"
					: "opacity-0 invisible translate-x-8 transition-all duration-300 ease-in-out"
			}`}
		>
			<div
				className={` blur-effect-theme h-screen max-w-xl w-full absolute right-0`}
			>
				<CartCounter
					OffcartToggle={OffcartToggle}
					totalQuantity={totalQuantity}
				/>
				{/* SI HAY ITEMS EN EL CARRITO MUESTRA CartItem, SI NO MUESTRA CartEmpty */}
				{cartItems.length === 0 ? (
					<CartEmpty OffcartToggle={OffcartToggle} />
				) : (
					<div>
						<div
							className='flex items-start justify-start flex-col gap-y-7 lg:gap-y-5
						 overflow-y-scroll h-[81vh] scroll-smooth scroll-hidden'
						>
							{cartItems.map((item) => (
								<CartItem
									key={item.id}
									item={item}
								/>
							))}
						</div>

						<div className='fixed bottom-5 bg-white w-full px-5 py-2 grid items-center'>
							<div className='flex items-center justify-between'>
								<h1 className='text-base font-semibold uppercase'>SubTotal</h1>
								<h1 className='text-sm rounded bg-theme-cart text-slate-100 px-1 py-0.5'>
									${totalAmount}
								</h1>
							</div>
							<div className='grid items-center gap-2'>
								<p className='text-sm font-medium text-center'>
									Taxes and Shipping Will Calculate At Shipping
								</p>
								<button
								onClick={onClearItem}

									type='button'
									className='button-theme bg-theme-cart text-white'
								>
									Check Out
								</button>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Cart;
