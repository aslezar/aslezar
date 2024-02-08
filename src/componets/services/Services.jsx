import "./services.scss";
import { motion, useInView } from "framer-motion";
import React from "react";

const variants = {
	initial: {
		//set x to current screen width
		x: (window.innerWidth * -1) / 2,
		y: 100,
		opacity: 0,
	},
	animate: {
		x: 0,
		opacity: 1,
		y: 0,
		transition: {
			duration: 1,
			staggerChildren: 0.1,
		},
	},
};

const Services = () => {
	const ref = React.useRef();
	const isInView = useInView(ref, {
		margin: "-100px",
	});
	return (
		<motion.div
			className="services"
			variants={variants}
			initial="initial"
			ref={ref}
			// whileInView="animate"
			animate={isInView ? "animate" : "initial"}
			// animate={"animate"}
		>
			<motion.div className="textContainer" variants={variants}>
				<p>
					I focus on helping your brand grow <br />
					and move forward
				</p>
				<hr />
			</motion.div>
			<motion.div className="titleContainer" variants={variants}>
				<div className="title">
					<img src="./people.webp" alt="" />
					<h1>
						<motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas
					</h1>
				</div>
				<div className="title">
					<h1>
						<motion.b whileHover={{ color: "orange" }}>For your</motion.b>{" "}
						Business.
					</h1>
					<button>WHAT WE DO?</button>
				</div>
			</motion.div>
			<motion.div className="listContainer" variants={variants}>
				<motion.div
					className="box"
					whileHover={{
						background: "lightgray",
						color: "black",
					}}
				>
					<h2>Branding</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
						aperiam laudantium. Labore reprehenderit molestias hic placeat at
						numquam nisi delectus?
					</p>
					<button>Go</button>
				</motion.div>
				<motion.div
					className="box"
					whileHover={{
						background: "lightgray",
						color: "black",
					}}
				>
					<h2>Branding</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
						aperiam laudantium. Labore reprehenderit molestias hic placeat at
						numquam nisi delectus?
					</p>
					<button>Go</button>
				</motion.div>
				<motion.div
					className="box"
					whileHover={{
						background: "lightgray",
						color: "black",
					}}
				>
					<h2>Branding</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
						aperiam laudantium. Labore reprehenderit molestias hic placeat at
						numquam nisi delectus?
					</p>
					<button>Go</button>
				</motion.div>
				<motion.div
					className="box"
					whileHover={{
						background: "lightgray",
						color: "black",
					}}
				>
					<h2>Branding</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
						aperiam laudantium. Labore reprehenderit molestias hic placeat at
						numquam nisi delectus?
					</p>
					<button>Go</button>
				</motion.div>
			</motion.div>
		</motion.div>
	);
};

export default Services;
