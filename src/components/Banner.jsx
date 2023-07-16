/* eslint-disable react/prop-types */

import Clips from "../utils/Clips";
import SocialLink from "../utils/SocialLink";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Banner = ({ heroapi }) => {
	return (
		<section>
			<div className='relative h-auto w-auto flex flex-col'>
				<div
					className='bg-theme clip-path h-[85vh] lg:h-[75vh] md:h-[65vh] sm:h-[55vh] w-auto absolute top-0 left-0
			right-0 opacity-100 z-10 '
				></div>
				<div className='relative opacity-100 z-20 grid items-center justify-items-center nike-container'>
					<div className='grid items-center justify-items-center mt-28'></div>
					<motion.h1
						variants={fadeIn("right", 0.3)}
						initial='hidden'
						whileInView={"show"}
						viewport={{ once: false, amount: 0.7 }}
						className='text-6xl lg:text-5xl md:text-4xl sm:text-3xl xs:text-2xl font-extrabold filter drop-shadow-sm
					 text-blue-100'
					>
						{heroapi.title}
					</motion.h1>
					<motion.h2
						variants={fadeIn("left", 0.3)}
						initial='hidden'
						whileInView={"show"}
						viewport={{ once: false, amount: 0.7 }}
						className='text-6xl lg:text-5xl md:text-4xl sm:text-3xl xs:text-2xl font-extrabold filter drop-shadow-sm
					 text-blue-100'
					>
						{heroapi.subtitle}
					</motion.h2>
					<button
						type='button'
						className='button-theme bg-slate-200 shadow-slate-200 rounded-md mt-5 mb-5'
					>
						{heroapi.btntext}
					</button>
					<div
						className='grid items-center gap-5 md:gap-3 absolute top-[33vh] lg:top-[27vh] left-[11%] xl:left-0 w-auto
					 h-auto mt-5'
					>
						<Clips videos={heroapi.videos} />
					</div>

					<div className='grid items-center gap-2  absolute top-[33vh] lg:top-[27vh] right-0'>
						<SocialLink icons={heroapi.sociallinks} />
					</div>
					<div className=''>
						<img
							src={heroapi.img}
							alt='hero'
							className='mt-5 w-auto h-[45vh] lg:h-[35vh] md:h-[31vh] sm:h-[21vh] xs:h-[19vh] transitions-theme
							-rotate-[25deg] hover:rotate-0 cursor-pointer object-fill z-20'
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Banner;
