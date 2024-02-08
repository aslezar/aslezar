import React from "react";
import { motion } from "framer-motion";

const variants = {
	open: {
		transition: { staggerChildren: 0.1 },
	},
	closed: {
		transition: { staggerChildren: 0.05, staggerDirection: -1 },
	},
};
const itemVariants = {
	open: {
		y: 0,
		opacity: 1,
		scale: 1,
	},
	closed: {
		y: 50,
		opacity: 0,
		scale: 0.8,
	},
};

const items = ["Homepage", "Services", "Portfolio", "Contact", "About"];

const Links = () => {
	return (
		<motion.div className="links" variants={variants}>
			{items.map((item, index) => {
				return (
					<motion.a
						href={`#${item}`}
						key={index}
						variants={itemVariants}
						whileHover={{ scale: 1.1, color: "#007bff" }}
						whileTap={{ scale: 0.95 }}
						style={{ textDecoration: "none", color: "#000" }}
					>
						{item}
					</motion.a>
				);
			})}
		</motion.div>
	);
};

export default Links;
