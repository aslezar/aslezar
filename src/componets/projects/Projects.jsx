import React from "react";
import ProjectList from "../../ProjectList";
import { motion, useInView } from "framer-motion";

import "./projects.scss";

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

const Services = () => {
	const ref = React.useRef();
	const isInView = useInView(ref, {
		margin: "-100px",
	});
	const techStack = ["Tailwind CSS", "React", "Javascript", "HTML", "CSS"];

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
			<motion.div className="textContainer5" variants={variants}>
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
				{ProjectList.map((project, index) => (
					<motion.div
						key={index}
						// className="box"
						whileHover={{
							background: "lightgray",
							color: "black",
						}}
					>
						<ProjectCard {...project} />
					</motion.div>
				))}
			</motion.div>
		</motion.div>
	);
};
const ProjectCard = ({
	title,
	img,
	techStack,
	time_from,
	time_to,
	description,
	liveDemo,
	githubRepo,
}) => {
	return (
		<>
			<div className="product-group group p-[1px] flex items-center justify-center relative select-none">
				<div className="relative z-20 group p-[10px] glassmorph rounded-lg z-1">
					<div className="relative h-[200px] w-[300px] flex flex-row items-center justify-center rounded-md overflow-hidden">
						<img
							alt="image1"
							draggable="false"
							loading="lazy"
							decoding="async"
							data-nimg="1"
							className="image_one"
							style={{
								color: "transparent",
							}}
							src={img}
							width="300"
							height="200"
						/>
					</div>
					<div className="flex flex-wrap gap-2">
						{techStack.map((tech, index) => (
							<Tag key={index}>{tech}</Tag>
						))}
					</div>
					<div className="pt-[10px] rounded-b-lg">
						<div className="text-[10px] text-[#9a9a9b]">
							Physiotherapist Education Website
						</div>
						<div className="text-gray-400 text-sm">
							{time_from} - {time_to}
						</div>
						<div className="">
							<p className="text-[12px] text-gray-400">{description}</p>
						</div>
						<div className="w-full flex flex-row items-center justify-between">
							<a target="_blank" href="https://physiohub.io" rel="noreferrer">
								<div className="cursor-pointer hover:text-white duration-200 flex flex-row items-center gap-2 bg-[#23a7f2] group-hover:bg-[#1e97dd] text-black text-[12px] px-[10px] py-[4px] rounded-[4px] font-medium">
									<svg
										stroke="currentColor"
										fill="currentColor"
										strokeWidth="0"
										viewBox="0 0 496 512"
										height="1em"
										width="1em"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
									</svg>
									<div>Repo</div>
								</div>
							</a>
							<a target="_blank" href="https://physiohub.io" rel="noreferrer">
								<div className="cursor-pointer hover:text-white duration-200 flex flex-row items-center gap-2 bg-[#23a7f2] group-hover:bg-[#1e97dd] text-black text-[12px] px-[10px] py-[4px] rounded-[4px] font-medium">
									<svg
										fill="currentColor"
										width="10px"
										height="10px"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path d="m12.922 16.587-3.671 3.671c-.693.645-1.626 1.041-2.651 1.041-2.152 0-3.896-1.744-3.896-3.896 0-1.025.396-1.958 1.043-2.654l-.002.002 3.671-3.671c.212-.23.341-.539.341-.878 0-.717-.582-1.299-1.299-1.299-.339 0-.647.13-.879.342l.001-.001-3.671 3.671c-1.108 1.162-1.789 2.74-1.789 4.476 0 3.586 2.907 6.494 6.494 6.494 1.738 0 3.316-.683 4.482-1.795l-.003.002 3.671-3.671c.212-.23.341-.539.341-.878 0-.717-.582-1.299-1.299-1.299-.339 0-.647.13-.879.342l.001-.001z"></path>
										<path d="m24.007 6.489c-.002-3.585-2.908-6.491-6.494-6.491-1.793 0-3.417.727-4.592 1.902l-3.671 3.671c-.259.238-.421.579-.421.958 0 .717.582 1.299 1.299 1.299.379 0 .719-.162.957-.42l.001-.001 3.671-3.671c.693-.645 1.626-1.041 2.651-1.041 2.152 0 3.896 1.744 3.896 3.896 0 1.025-.396 1.958-1.043 2.654l.002-.002-3.671 3.671c-.259.238-.421.579-.421.958 0 .717.582 1.299 1.299 1.299.379 0 .719-.162.957-.42l.001-.001 3.671-3.671c1.178-1.169 1.908-2.789 1.908-4.58 0-.003 0-.006 0-.009z"></path>
										<path d="m7.412 16.592c.235.235.559.38.918.38s.683-.145.918-.38l7.342-7.342c.212-.23.341-.539.341-.878 0-.717-.582-1.299-1.299-1.299-.339 0-.647.13-.879.342l.001-.001-7.342 7.342c-.235.235-.38.559-.38.918s.145.683.38.918z"></path>
									</svg>
									<div>Live</div>
								</div>
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

const Tag = ({ children }) => {
	return (
		<div className="px-3 py-1 text-sm text-gray-950 bg-gradient-to-l from-amber-600 to-lime-600 rounded-full">
			{children}
		</div>
	);
};

export default Services;
