import React from "react";

import Skills from "../skills/Skills";
import Projects from "../projects/Projects";
import Experience from "../experience/Experience";

import { motion, useScroll, useTransform } from "framer-motion";

import "./parallax.scss";

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
					type === "skills"
						? "linear-gradient(180deg,#111132,#0c0c1d)"
						: "linear-gradient(180deg,#111132,#505064)",
			}}
		>
			<motion.h1 style={{ y: yText }}>
				{
					{
						skills: "My Skills",
						projects: "My Projects",
						experience: "Experience",
					}[type]
				}
			</motion.h1>
			{
				{
					skills: <Skills />,
					projects: <Projects />,
					experience: <Experience />,
				}[type]
			}
			{/* <motion.div className="mountains"></motion.div> */}
			<motion.div
				className="planets"
				style={{
					y: yBg,
					backgroundImage: `url(${
						type === "skills" ? "/plantes.png" : "/sun.png"
					})`,
				}}
			></motion.div>
			<motion.div className="stars" style={{ x: yBg }}></motion.div>
		</div>
	);
};

export default Parallax;
