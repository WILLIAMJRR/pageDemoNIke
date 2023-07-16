/* eslint-disable react/prop-types */
import ItemsTops from "../utils/ItemsTops";
import ItemsPopulars from "../utils/ItemsPopulars";
import FlexContentHeading from "../utils/FlexContentHeading";
import FlexContentFooter from "../utils/FlexContentFooter";

const Sales = ({ popularsales, toprateslaes, highlight, sneaker }) => {
	return (
		<>
			<div className='mt-5 nike-container'>
				<div className='grid  mt-9 md:mt-2'>
					<h2 className='text-5xl lg:text-4xl md:text-3xl font-bold filter drop-shadow-lg'>
						{popularsales.title}
					</h2>
					<div
						className='grid items-center justify-items-center grid-cols-3 xl:grid-cols-2 md:grid-cols-1
           sm:grid-cols-1 gap-7 lg:gap-5 mt-7'
					>
						<ItemsPopulars popularsales={popularsales} />
					</div>
				</div>

				<div className='my-10'>
					<FlexContentHeading highlight={highlight} />
				</div>

				<div className='grid mt-9 md:mt-5'>
					<h2 className='text-5xl lg:text-4xl md:text-3xl font-bold filter drop-shadow-lg'>
						{toprateslaes.title}
					</h2>
					<div
						className='grid items-center justify-items-center grid-cols-4 xl:grid-cols-3 md:grid-cols-2
           sm:grid-cols-1 gap-7 lg:gap-5 mt-7'
					>
						<ItemsTops
							className={"relative bg-gradient-to-b "}
							toprateslaes={toprateslaes}
						/>
					</div>
				</div>

				<div className='my-10'>
					<FlexContentFooter sneaker={sneaker} />
				</div>
			</div>
		</>
	);
};

export default Sales;
