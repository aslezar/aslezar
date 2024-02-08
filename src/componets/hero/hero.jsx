import "./hero.scss";
import { motion } from "framer-motion";

const textVaraints = {
	initial: {
		x: 500,
		opacity: 0,
	},
	animate: {
		x: 0,
		opacity: 1,
		transition: {
			duration: 1,
			staggerChildren: 0.1,
		},
	},
	scrollButton: {
		opacity: 0,

		y: [0, 10, 0],
		transition: {
			repeat: Infinity,
			duration: 2,
		},
	},
};
// const sliderVaraints = {
// 	initial: {
// 		x: 0,
// 	},
// 	animate: {
// 		x: "-220%",
// 		transition: {
// 			repeat: Infinity,
// 			repeatType: "mirror",
// 			duration: 20,
// 		},
// 	},
// };

const hero = () => {
	return (
		<div className="hero">
			<div className="wrapper">
				<motion.div
					className="textContainer"
					variants={textVaraints}
					initial="initial"
					animate="animate"
				>
					<motion.h2 variants={textVaraints}>Shivam Garg</motion.h2>
					<motion.h1 variants={textVaraints}>
						Web Developer and Programmer
					</motion.h1>
					<motion.div className="buttons" variants={textVaraints}>
						<motion.button
							variants={textVaraints}
							onClick={() =>
								document.getElementById("Services").scrollIntoView()
							}
						>
							See My latest Work
						</motion.button>
						<motion.button
							variants={textVaraints}
							onClick={() =>
								document.getElementById("Contact").scrollIntoView()
							}
						>
							Contact Me
						</motion.button>
					</motion.div>
					<motion.img
						src="/scroll.png"
						alt="scroll toview"
						variants={textVaraints}
						animate="scrollButton"
					/>
				</motion.div>
			</div>
			{/* <motion.div
				className="slidingTextContainer"
				variants={sliderVaraints}
				initial="initial"
				animate="animate"
			>
				Developer | Programmer
			</motion.div> */}
			<div className="imageContainer">
				<img src="/3D0.png" alt="Hero Image" />
			</div>
		</div>
	);
};

export default hero;
