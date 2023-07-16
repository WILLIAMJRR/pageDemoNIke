/* eslint-disable react/prop-types */
import { PlayIcon } from "@heroicons/react/24/solid";
const Clips = ({ videos }) => {
	return (
		<>
			{videos?.map((video, i) => (
				<div
					key={i}
					className='relative h-28 w-32 overflow-hidden group rounded-xl cursor-pointer transition-all duration-300 lg:w-28 md:w-24 sm:w-16 lg:h-28 md:h-24 sm:h-16  '
				>
					<img
						src={video.imgsrc}
						alt='img/clips'
						className='inset-0 flex h-full w-full object-cover absolute top-0 left-0 right-0
            opacity-100 z-10 transition-opacity  duration-500 '
					/>
					<div
						className='bg-white  blur-effect-theme absolute top-11 right-11 left-12 lg:top-8 lg:left-8
           sm:top-4 sm:left-4  opacity-100 z-50 rounded-full w-8 h-8 flex items-center justify-center'
					>
						<PlayIcon className='icon-style w-4 h-4 md:w-3 md:h-3 text-slate-900 ' />
					</div>
					<video
						autoPlay={true}
						loop={true}
						muted={true}
						playsInline={true}
						className='absolute top-0 left-0 right-0 flex h-full w-full object-cover opacity-0 z-0 group-hover:opacity-100  group-hover:z-50'
					>
						<source
							src={video.clip}
							type='video/mp4'
						/>
					</video>
				</div>
			))}
		</>
	);
};

export default Clips;
