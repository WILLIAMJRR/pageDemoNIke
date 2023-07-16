/* eslint-disable react/prop-types */
const SocialLink = ({ icons }) => {

	return (
		<>
			{icons.map((icon, i) => (
				<div key={i}>
					<a href=''>
						<img
							src={icon.icon}
							alt='icon'
							className='w-8 h-8 flex items-center cursor-pointer md:w-6 md:h-6 sm:w-5 sm:h-5 trasitions-all
            duration-200 hover:scale-110'
						/>
					</a>
				</div>
			))}
		</>
	);
};

export default SocialLink;
