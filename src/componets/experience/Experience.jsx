import React from "react";
import "./experience.scss";
import PropTypes from "prop-types";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
	{
		id: 1,
		title: "Web App",
		img: "https://images.pexels.com/photos/3184356/pexels-photo-3184356.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
		desc: "This is a web app",
	},
	{
		id: 2,
		title: "Mobile App",
		img: "https://images.pexels.com/photos/3184356/pexels-photo-3184356.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
		desc: "This is a mobile app",
	},
	{
		id: 3,
		title: "Design",
		img: "https://images.pexels.com/photos/3184356/pexels-photo-3184356.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
		desc: "This is a design",
	},
	{
		id: 4,
		title: "Web App",
		img: "https://images.pexels.com/photos/3184356/pexels-photo-3184356.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
		desc: "This is a web app",
	},
];

const Single = ({ item }) => {
	const ref = React.useRef();

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "end start"],
	});

	const y = useTransform(scrollYProgress, [0, 1], ["-50vh", "50vh"]);

	return (
		<section>
			<div className="container2">
				<div className="wrapper2">
					<div className="imgContainer2" ref={ref}>
						<img src={item.img} alt={item.title} />
					</div>
					<motion.div className="textContainer2" style={{ y }}>
						<h2>{item.title}</h2>
						<p>{item.desc}</p>
						<button>See Demo</button>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

Single.propTypes = {
	item: PropTypes.object,
};

const Portfolio = () => {
	const ref = React.useRef();
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["end end", "start start"],
	});

	const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
	return (
		<div className="portfolio" ref={ref}>
			<div className="progress">
				<h1>My Projects</h1>
				<motion.div className="progressBar" style={{ scaleX }}></motion.div>
			</div>
			{items.map((item) => (
				<Single key={item.id} item={item} />
			))}
		</div>
	);
};

export default Portfolio;
