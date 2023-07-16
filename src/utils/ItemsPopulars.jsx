/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { setAddCartItem } from "../app/CarItemsSlice";
import { setOpenCloseCart } from "../app/Cartslice";
import { StarIcon, ShoppingBagIcon } from "@heroicons/react/24/solid";
const ItemsPopulars = ({ popularsales }) => {
	const dispatch = useDispatch();

	const OnAddToCartPopular = (item) => {
		dispatch(setAddCartItem(item));
	};

	const OncartToggle = () => {
		dispatch(setOpenCloseCart({ CartSlice: true }));
	};

	return (
		<>
			{popularsales.items.map((item) => (
				<div
					className={`relative bg-gradient-to-b ${item.color} ${item.shadow}  grid items-center
		 rounded-xl  px-5 py-4 transition duration-700 ease-in-out w-full  hover:scale-105 `}
					key={item.id}
				>
					<div className='grid items-center justify-items-star'>
						<h2 className='text-slate-200 text-xl lg:text-lg md:text-base font-medium filter drop-shadow'>
							{item.title}
						</h2>

						<p className='text-slate-200  md:text-sm font-normal filter drop-shadow'>
							{item.text}
						</p>

						<div className='flex items-center justify-between w-28 mt-2 mb-2'>
							<div className='flex items-center bg-white/80 pl-1 pr-1 rounded '>
								<p className='text-black text-sm font-medium'>${item.price}</p>
							</div>
							<div className='flex items-center gap-1'>
								<StarIcon className='icon-style w-5 h-5 md:w-4 md:h-4' />
								<p className='text-sm font-normal text-slate-100'>
									{item.rating}
								</p>
							</div>
						</div>

						<div className='flex items-center gap-3'>
							<button
								onClick={() => OnAddToCartPopular(item)}
								type='button'
								className='bg-white/90 blur-effect-theme button-theme p-1 shadow-slate-900 rounded-full'
							>
								<ShoppingBagIcon className='icon-style text-slate-900' />
							</button>
							<button
								onClick={() => {
									OnAddToCartPopular(item);
									OncartToggle();
								}}
								type='button'
								className='bg-white/90 blur-effect-theme button-theme  shadow-slate-900 rounded px-2 py-1'
							>
								{item.btn}
							</button>
						</div>
					</div>
					<div className='flex items-center absolute top-5 right-1'>
						<img
							src={item.img}
							alt={item.title}
							className='h-auto w-64 lg:w-56 md:w-48 -rotate-[35deg] transition duration-500 ease-in-out transform hover:scale-110 hover:-rotate-12
							'
						/>
					</div>
				</div>
			))}
		</>
	);
};

export default ItemsPopulars;
