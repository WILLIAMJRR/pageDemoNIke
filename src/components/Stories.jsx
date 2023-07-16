/* eslint-disable react/prop-types */
import { useRef } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { HeartIcon, HashtagIcon } from "@heroicons/react/24/solid";
import { ClockIcon } from "@heroicons/react/24/outline";
import { truncate } from "lodash";

const Stories = ({ stories }) => {
	const news = useRef(stories.news).current;

	const splideOption = {
		perPage: 4,
		perMove: 1,
		type: "loop",
		autoplay: true,
		rewind: true,
		interval: 3000,
		keyboard: "global",
		gap: "1rem",
		pagination: false,
		padding: "2rem",
		breakpoints: {
			1200: { perPage: 3 },
			991: { perPage: 2.3 },
			768: { perPage: 2 },
			500: { perPage: 1.3 },
			425: { perPage: 1 },
		},
	};

	return (
		<div className='nike-container mb-11'>
			<div className='grid  mt-9 md:mt-2 '>
				<h2 className='text-5xl lg:text-4xl md:text-3xl font-bold filter drop-shadow-lg'>
					{stories.title}
				</h2>
			</div>
			<div className='mt-7'>
				<Splide options={splideOption}>
					{news.map((story, i) => (
						<SplideSlide
							key={i}
							className='mb-0.5'
						>
							<div className='relative grid items-center gap-4 pb-2 rounded shadow shadow-slate-200 w-full h-[500px]  md:h-[400px]  overflow-hidden'>
								<div className='flex items-center justify-center'>
									<img
										src={story.img}
										alt={story.title}
										className='w-full h-auto rounded-lg object-cover shadow-md shadow-slate-200 '
									/>
								</div>
								<div className='flex items-center justify-between w-full  px-4'>
									<div className='flex items-center gap-1'>
										<HeartIcon className='icon-style  text-red-600 w-5 h-5 ' />
										<span className='text-xs font-bold'>{story.like}</span>
									</div>
									<div className='flex items-center gap-1'>
										<ClockIcon className='icon-style w-4 h-4 text-black' />
										<span className=' text-xs font-bold'>{story.time}</span>
									</div>
									<div className='flex items-center gap-1'>
										<HashtagIcon className='icon-style text-blue-500' />
										<span className='text-xs font-bold text-blue-600'>
											{story.by}
										</span>
									</div>
								</div>
								<div className='grid items-center justify-items-start px-4 '>
									<h3 className='text-base font-semibold lg:text-sm'>
										{story.title}
									</h3>
									<p className='text-sm text-justify lg:text-xs'>
										{truncate(story.text, { length: 100 })}
									</p>
								</div>
								<div className='flex items-center justify-center px-4 w-full'>
									<a
										href={story.url}
										target='_blank'
										rel='noreferrer'
										role={"button"}
										className='blur-effect-theme button-theme  shadow-slate-900 rounded  bg-slate-950 text-slate-200 font-semibold absolute bottom-3 md:bottom-2  px-4 hover:bg-slate-900 hover:text-slate-200 transition duration-300 ease-in-out'
									>
										{story.btn}
									</a>
								</div>
							</div>
						</SplideSlide>
					))}
				</Splide>
			</div>
		</div>
	);
};

export default Stories;
