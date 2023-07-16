import { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import {
	MagnifyingGlassIcon,
	HeartIcon,
	ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import { useDispatch, useSelector} from "react-redux";
import { setOpenCloseCart } from "/src/app/Cartslice.js";
import { selectCartTotalQuantity } from "../app/CarItemsSlice";
const Navbar = () => {
	const [navbar, setNavbar] = useState(false);

	const dispatch = useDispatch();

	// abrir el carrito
	const OncartToggle = () => {
		dispatch(setOpenCloseCart({ CartSlice: true }));
	};

	const totalQuantity = useSelector(selectCartTotalQuantity);

	const NavScroll = () => {
		if (window.scrollY >= 30) {
			setNavbar(true);
		} else {
			setNavbar(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", NavScroll);

		return () => {
			window.removeEventListener("scroll", NavScroll);
		};
	}, []);

	return (
		<>
			<header
				className={
					navbar
						? "fixed top-0 left-0 right-0 h-[9vh] flex item-center justify-between shadow-slate-200 z-50 blur-effect-theme transition-all duration-300 ease-in-out"
						: "absolute top-7 left-0 right-0 opacity-100 z-[200]"
				}
			>
				<nav className=' flex item-center justify-between nike-container'>
					<div className='flex item-center '>
						<img
							className={
								navbar ? "w-16 h-auto filter brightness-0" : "w-16 h-auto "
							}
							src={logo}
							alt=''
						/>
					</div>
					<ul className='flex justify-center items-center gap-2'>
						<li className='grid items-center'>
							<MagnifyingGlassIcon
								className={
									navbar
										? "icon-style text-slate-950"
										: "icon-style text-slate-200"
								}
							/>
						</li>
						<li className='grid items-center'>
							<HeartIcon
								className={
									navbar
										? "icon-style text-slate-950"
										: "icon-style text-slate-200"
								}
							/>
						</li>
						<li className='grid items-center'>
							<button
								onClick={OncartToggle}
								type='button'
								className='border-none outline-none active:scale-110 transcition-all duration-300 ease-in-out relative'
							>
								<ShoppingBagIcon
									className={
										navbar
											? "icon-style text-slate-950"
											: "icon-style text-slate-200"
									}
								/>
								<div
									className={`absolute top-4 right-0 shadow shadow-slate-100
                text-[0.65rem] w-4 h-4 leading-tight font-medium rounded-full flex items-center justify-center
                hover:scale-110 transition-all ${
									navbar
										? "bg-slate-950 text-slate-100 shadow-slate-950 "
										: " bg-slate-200"
								} `}
								>
									{totalQuantity.totalQuantity}
								</div>
							</button>
						</li>
					</ul>
				</nav>
			</header>
		</>
	);
};

export default Navbar;
