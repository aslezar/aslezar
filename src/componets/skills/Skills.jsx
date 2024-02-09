import "./skills.scss";
import { motion, useInView } from "framer-motion";
import React from "react";

import {
	webSkills,
	programmingLanguages,
	softwareDevelopmentTools,
} from "../../SkillList";

const variants = {
	initial: {
		//set x to current screen width
		x: (window.innerWidth * -1) / 4,
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

const Skills = () => {
	const ref = React.useRef();
	const isInView = useInView(ref, {
		margin: "-100px",
	});

	return (
		<motion.div
			className="skills  p-20"
			variants={variants}
			initial="initial"
			ref={ref}
			animate={isInView ? "animate" : "initial"}
		>
			<motion.div
				className="listContainer flex flex-col h-auto"
				variants={variants}
			>
				<h2>Web Technologies</h2>
				<div className="skillContainer grid grid-cols-7 gap-5">
					{webSkills.map((skill, index) => (
						<SkillCard key={index} name={skill.name} svg={skill.svg} />
					))}
				</div>
			</motion.div>
			<motion.div
				className="listContainer flex flex-col h-auto"
				variants={variants}
			>
				<h2>Programming Languages</h2>
				<div className="skillContainer grid grid-cols-6 gap-5">
					{programmingLanguages.map((skill, index) => (
						<SkillCard key={index} name={skill.name} svg={skill.svg} />
					))}
				</div>
			</motion.div>
			<motion.div
				className="listContainer flex flex-col h-auto"
				variants={variants}
			>
				<h2> Software Development Tools</h2>
				<div className="skillContainer grid grid-cols-5 gap-5">
					{softwareDevelopmentTools.map((skill, index) => (
						<SkillCard key={index} name={skill.name} svg={skill.svg} />
					))}
				</div>
			</motion.div>
		</motion.div>
	);
};
const SkillCard = ({ name, svg }) => {
	return (
		<>
			<div className="select-none relative">
				<div className="z-20 duration-200 relative p-[1px] bg-[#ffffff27] rounded-xl bg-gradient-to-r from-[#019ae9] to-[#00dfd8]">
					<div className="h-[80px] w-full bg-black rounded-t-xl flex items-center justify-center">
						<img
							src={svg}
							alt=""
							style={{
								height: "40px",
								width: "40px",
							}}
						/>
					</div>
					<div className="w-[95px] h-[30px] rounded-b-xl">
						<div className="flex items-center justify-center h-full duration-100 text-sm font-semibold">
							{name}
						</div>
					</div>
				</div>
				<div className="absolute duration-200 top-10 h-[50px] w-full bg-gradient-to-r from-[#019ae9] to-[#00dfd8] blur-3xl"></div>
			</div>
		</>
	);
};

export default Skills;
