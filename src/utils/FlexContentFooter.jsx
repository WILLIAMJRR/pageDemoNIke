import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const flexContentFooter = ({ sneaker }) => {
	return (
		<>
			<motion.div
				variants={fadeIn("left", 0.3)}
				initial='hidden'
				whileInView={"show"}
				viewport={{ once: false, amount: 0.7 }}
				className={`flex items-center justify-between lg:flex-col lg:justify-center nike-container`}
			>
				<div className='max-w-lg lg:max-w-none w-full md:text-center grid items-center lg:justify-items-center'>
					<h2 className='text-4xl sm:text-3xl font-bold text-gradient'>{sneaker.heading}</h2>
					<h2 className='text-5xl lg:text-4xl md:text-3xl sm:text-2xl font-bold text-slate-900'>
						{sneaker.title}
					</h2>
					<p className='xl:text-sm my-4 text-indigo-950'>{sneaker.text}</p>
					<a
						className='flex items-center '
						target={"_blank"}
						rel='noreferrer'
						role='button'
						href={sneaker.url}
					>
						<button
							className='button-theme bg-indigo-900 text-slate-100 py-1.5'
							type='button'
						>
							{sneaker.btn}
						</button>
					</a>
				</div>
				<div className='flex items-center justify-center max-w-xl relative lg:max-w-none w-full'>
					<img
						className={`w-auto object-fill transition-theme h-60 lg:h-56 md:h-52 sm:h-44 xs:h-36 rotate-6
             hover:-rotate-[19deg] transition-all ease-out duration-500`}
						src={sneaker.img}
						alt={sneaker.title}
					/>
				</div>
			</motion.div>
		</>
	);
};

export default flexContentFooter;
