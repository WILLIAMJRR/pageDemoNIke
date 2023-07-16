import { Banner, Cart, Footer, Navbar, Sales, Stories } from "./components";
import { heroapi, popularsales, toprateslaes, highlight, sneaker, story,footerAPI } from "./data/data";


const App = () => {



	return (
		<>
			<main className='flex flex-col gap-16 relative'>
				<Navbar />
				<Cart />
				<Banner heroapi={heroapi} />
				<Sales
					popularsales={popularsales}
					toprateslaes={toprateslaes}
					highlight={highlight}
					sneaker={sneaker}
				/>
				<Stories stories={story} />
				<Footer footerAPI={footerAPI}  />
			</main>
		</>
	);
};

export default App;
