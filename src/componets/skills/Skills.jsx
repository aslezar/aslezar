import "./skills.scss";
import React from "react";
import PropTypes from "prop-types";

import {
	webSkills,
	programmingLanguages,
	softwareDevelopmentTools,
} from "../../SkillList";

const Skills = () => {
	return (
		<div className="skills  p-4 md:p-20">
			<div className="listContainer flex flex-col h-auto">
				<h2 className="mb-5 text-[22px] md:text-[36px] text-center md:text-left">
					Web Technologies
				</h2>
				<div className="skillContainer grid grid-cols-4 md:grid-cols-7 gap-5 m-auto">
					{webSkills.map((skill, index) => (
						<SkillCard key={index} name={skill.name} svg={skill.svg} />
					))}
				</div>
			</div>
			<div className="flex flex-col md:flex-row gap-10 md:gap-0">
				<div className="listContainer flex flex-col h-auto">
					<h2 className="mb-5 text-[18px] md:text-[32px] text-center md:text-left">
						Programming Languages
					</h2>
					<div className="skillContainer grid grid-cols-4 gap-5 m-auto">
						{programmingLanguages.map((skill, index) => (
							<SkillCard key={index} name={skill.name} svg={skill.svg} />
						))}
					</div>
				</div>
				<div className="listContainer flex flex-col h-auto">
					<h2 className="mb-5 text-[18px] md:text-[32px] text-center md:text-left">
						{" "}
						Software Development Tools
					</h2>
					<div className="skillContainer grid grid-cols-4 gap-5 m-auto">
						{softwareDevelopmentTools.map((skill, index) => (
							<SkillCard key={index} name={skill.name} svg={skill.svg} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
};
import { useEffect, useState } from "react";

const SkillCard = ({ name, svg }) => {
	const [bgColor, setBgColor] = useState({
		lighterBgColor: "transparent",
		darkerBgColor: "transparent",
	});

	useEffect(() => {
		const img = new Image();
		img.crossOrigin = "Anonymous";
		img.src = svg;
		img.onload = () => {
			const canvas = document.createElement("canvas");
			const ctx = canvas.getContext("2d");
			ctx.drawImage(img, 0, 0, img.width, img.height);
			const imageData = ctx.getImageData(0, 0, img.width, img.height).data;
			const rgb = [0, 0, 0];

			for (let i = 0; i < imageData.length; i += 4) {
				rgb[0] += imageData[i];
				rgb[1] += imageData[i + 1];
				rgb[2] += imageData[i + 2];
			}

			rgb[0] /= imageData.length / 4;
			rgb[1] /= imageData.length / 4;
			rgb[2] /= imageData.length / 4;

			const lighterRgb = rgb.map((val) => Math.floor(val * 1.2));
			const lighterBgColor = `rgb(${lighterRgb[0]}, ${lighterRgb[1]}, ${lighterRgb[2]})`;

			// Adjust the RGB values to create a darker shade
			const darkerRgb = rgb.map((val) => Math.floor(val * 0.8)); // Adjust the multiplier for desired darkness
			const darkerBgColor = `rgb(${darkerRgb[0]}, ${darkerRgb[1]}, ${darkerRgb[2]})`;
			setBgColor({ lighterBgColor, darkerBgColor });
		};
	}, [svg]);

	return (
		<>
			<div className="select-none w-18 md:w-24 z-10 min-w-20">
				<div
					className="z-20 duration-200 p-[1px] rounded-xl"
					style={{
						background: `linear-gradient(to right, ${bgColor.darkerBgColor},${bgColor.lighterBgColor})`,
					}}
				>
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
					<div className="p-2 md:w-[95px] h-[30px] rounded-b-xl">
						<div className="flex items-center justify-center h-full duration-100 text-sm font-semibold">
							{name}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

SkillCard.prototype = {
	name: PropTypes.string,
	svg: PropTypes.string,
};

export default Skills;
