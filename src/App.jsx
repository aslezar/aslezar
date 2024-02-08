import Navbar from "./componets/navbar/Navbar";
import Hero from "./componets/hero/hero";
import Parallax from "./componets/parallax/parallax";
import Services from "./componets/services/Services";
import Portfolio from "./componets/portfolio/Portfolio";
import Contact from "./componets/contact/Contact";
import "./app.scss";

function App() {
	return (
		<>
			<section id="Homepage">
				<Navbar />
				<Hero />
			</section>
			<section id="Services">
				<Parallax type="services" />
			</section>
			<section>
				<Services />
			</section>
			<section id="Portfolio">
				<Parallax type="portfolio" />
			</section>
			<Portfolio />
			<section id="Contact">
				<Contact />
			</section>
		</>
	);
}

export default App;
