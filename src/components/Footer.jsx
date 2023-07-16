/* eslint-disable react/prop-types */

const Footer = ({ footerAPI }) => {
	return (
		<>
			<footer className='bg-theme pt-7 pb-5'>
				<div className='nike-container text-slate-200'>
					<div className='grid item-start grid-cols-3 max-w-2xl w-full md:m-auto md:gap-5'>
						{footerAPI.titles.map((item, i) => (
							<div
								key={i}
								className=''
							>
								<h3 className='text-lg lg:text-base md:text-sm uppercase font-bold text-slate-950'>
									{item.title}
								</h3>
							</div>
						))}
						{footerAPI.links.map((list, i) => (
							<ul
								key={i}
								className='grid md:gap-0 items-center gap-1'
							>
								{list.map((link, i) => (
									<li
										key={i}
										className='text-sm sm:text-xs  '
									>
										{link.link}
									</li>
								))}
							</ul>
						))}
					</div>
					<div className='mt-5 text-center'>
						<p className='text-sm md:text-center '>
							Copyright
							<sup>&copy;</sup>
							All rights reserved.
						</p>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;

// Footer.PropTypes={
//   footerAPI: PropTypes.arrayOf(
//     PropTypes.shape({
//       title: PropTypes.string.isRequired,
//       link: PropTypes.string.isRequired,
//       icon: PropTypes.string.isRequired,
//     })
// };
