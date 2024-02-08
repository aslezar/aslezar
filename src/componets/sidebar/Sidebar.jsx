import React from "react";
import "./sidebar.scss";
import ToggleButton from "./toggleButton/ToggleButton";
import Links from "./links/Links";
import { motion } from "framer-motion";

const variants = {
	open: {
		clipPath: "circle(1200px at 50px 50px)",
		transition: {
			type: "spring",
			stiffness: 20,
			restDelta: 2,
			delay: 0.01,
		},
	},
	closed: {
		clipPath: "circle(30px at 50px 50px)",
		transition: {
			delay: 0,
			type: "spring",
			stiffness: 400,
			damping: 40,
		},
	},
};

const Sidebar = () => {
	const [open, setOpen] = React.useState(false);

	return (
		<motion.div
			className="sidebar"
			animate={open ? "open" : "closed"}
			onBlur={() => setOpen(false)}
		>
			<motion.div className="bg" variants={variants}>
				<Links onClick={(e) => e.stopPropagation()} />
			</motion.div>
			<ToggleButton setOpen={setOpen} />
		</motion.div>
	);
};

export default Sidebar;
