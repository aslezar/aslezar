import Cursor from "./componets/cursor/Cursor";
import Navbar from "./componets/navbar/Navbar";
import Hero from "./componets/hero/hero";
import Parallax from "./componets/parallax/parallax";
import Contact from "./componets/contact/Contact";
import About from "./componets/about/About";
import "./app.scss";

function App() {
	return (
		<>
			<Cursor />
			<section id="Homepage">
				<Navbar />
				<Hero />
			</section>
			<section id="Skills">
				<Parallax type="skills" />
			</section>
			<section id="Projects">
				<Parallax type="projects" />
			</section>
			<section id="Experience">
				<Parallax type="experience" />
			</section>
			<section id="Contact">
				<Contact />
			</section>
			{/* <section id="About">
				<About />
			</section> */}
		</>
	);
}

export default App;

// Work Experice
//About
//Aniamtions change
//ts particle
//responsiveness
//Update Data !important
