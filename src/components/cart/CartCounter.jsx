import PropTypes from "prop-types";
import { ChevronDoubleLeftIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { useDispatch } from "react-redux";
import { setClearCart } from "../../app/CarItemsSlice";

const CartCounter = ({ OffcartToggle,totalQuantity}) => {
	const dispatch = useDispatch();
console.log(totalQuantity)
	const onClearItem = () => {
		dispatch(setClearCart());
	};
	return (
		<div className='bg-slate-200 flex items-center h-11 justify-between px-3 sticky top-0 left-0 right-0 w-full'>
			<div className='flex items-center gap-3'>
				<div
					className='grid items-center cursor-pointer'
					onClick={OffcartToggle}
				>
					<ChevronDoubleLeftIcon className='w-5 h-5 text-slate-950 hover:text-orange-500 stroke-[2]' />
				</div>
				<div className='grid items-center cursor-pointer'>
					<h3 className='text-base font-medium text-slate-900'>
						Your Cart{" "}
						<span className='bg-theme rounded shadow shadow-slate-950 px-1 py-0.5 text-slate-100 font-normal text-xs'>
						(	{totalQuantity.totalQuantity} Items)
						</span>
					</h3>
				</div>
			</div>
			<div className='flex items-center '>
				<button
					onClick={() => {
						onClearItem();
						OffcartToggle();
					}}
					type='button'
					className='rounded-full bg-theme-cart text-slate-100 p-1 hover:bg-slate-100 hover:text-red-500 transition-all duration-300 ease-in-out'
				>
					<XMarkIcon className='w-5 h-5 stroke-[2]' />
				</button>
			</div>
		</div>
	);
};

export default CartCounter;

CartCounter.propTypes = {
	OffcartToggle: PropTypes.func.isRequired,
	totalQuantity: PropTypes.number.isRequired,
};
