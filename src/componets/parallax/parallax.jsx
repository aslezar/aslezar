import React from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";
const Parallax = ({ type }) => {
	const ref = React.useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "end start"],
	});
	const yBg = useTransform(scrollYProgress, [0, 1], ["-25vh", "25vh"]);
	const yText = useTransform(scrollYProgress, [0, 1], ["-40vh", "40vh"]);
	return (
		<div
			className="parallax"
			ref={ref}
			style={{
				background:
					type === "services"
						? "linear-gradient(180deg,#111132,#0c0c1d)"
						: "linear-gradient(180deg,#111132,#505064)",
			}}
		>
			<motion.h1 style={{ y: yText }}>
				{type === "services" ? "What I Do?" : "What I Did?"}
			</motion.h1>
			{/* <motion.div className="mountains"></motion.div> */}
			<motion.div
				className="planets"
				style={{
					y: yBg,
					backgroundImage: `url(${
						type === "services" ? "/plantes.png" : "/sun.png"
					})`,
				}}
			></motion.div>
			<motion.div className="stars" style={{ x: yBg }}></motion.div>
		</div>
	);
};

export default Parallax;
